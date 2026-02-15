// Data Management
        const STORAGE_KEY = 'tasbeeh_taqwa_data_v1';
        const ACHIEVEMENTS = [500, 1000, 3000, 7000, 10000, 15000, 30000, 40000, 50000, 70000, 90000, 100000];
        
        let data = loadData();
        let currentDhikrIndex = 0;
        let timerInterval = null;
        let autoInterval = null;
        let timerSeconds = 0;
        let isTimerRunning = false;
        let soundEnabled = true;
        let vibrationEnabled = true;
        let currentSpeed = 1;
        let isAutoMode = false;
        let rhythmTaps = [];
        let currentCalendarDate = new Date();

        // Default preset dhikrs
        const presetDhikrs = [
            { text: 'سُبْحَانَ اللَّهِ', target: 33 },
            { text: 'الْحَمْدُ لِلَّهِ', target: 33 },
            { text: 'اللَّهُ أَكْبَرُ', target: 33 },
            { text: 'أَسْتَغْفِرُ اللَّهَ', target: 100 },
            { text: 'لَا إِلَهَ إِلَّا اللَّهُ', target: 100 },
            { text: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', target: 100 },
            { text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ', target: 100 },
            { text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', target: 100 },
            { text: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', target: 100 }
        ];

        function loadData() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    return JSON.parse(saved);
                }
            } catch (e) {
                console.error('Error loading data:', e);
            }
            return getDefaultData();
        }

        function getDefaultData() {
            return {
                firstUse: new Date().toISOString(),
                dhikrs: presetDhikrs.map((preset, index) => ({
                    id: Date.now() + index,
                    text: preset.text,
                    count: 0,
                    rounds: 0,
                    target: preset.target,
                    secondsPerIncrement: 1,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                })),
                achievements: [],
                dailyTotals: {},
                settings: {
                    sound: true,
                    vibration: true,
                    accentColor: '#e85c8a'
                },
                logs: []
            };
        }

        function saveData() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch (e) {
                console.error('Error saving data:', e);
            }
        }

        function addLog(action) {
            const log = {
                timestamp: new Date().toISOString(),
                action: action
            };
            data.logs.unshift(log);
            if (data.logs.length > 50) data.logs.pop();
            saveData();
            updateLogsDisplay();
        }

        function updateLogsDisplay() {
            const container = document.getElementById('logsContainer');
            if (data.logs.length === 0) {
                container.innerHTML = 'لا توجد سجلات';
                return;
            }
            container.innerHTML = data.logs.map(log => {
                const date = new Date(log.timestamp);
                const time = date.toLocaleTimeString('ar-EG');
                return `<div style="padding: 5px; border-bottom: 1px solid rgba(0,0,0,0.1);">${time}: ${log.action}</div>`;
            }).join('');
        }

        // Arabic-Indic numerals conversion
        function toArabicIndic(num) {
            const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
            return num.toString().split('').map(char => {
                if (char >= '0' && char <= '9') {
                    return arabicDigits[parseInt(char)];
                }
                return char;
            }).join('');
        }

        // Audio Context for sounds
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        function playClickSound() {
            if (!soundEnabled) return;
            
            try {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                console.error('Audio error:', e);
            }
        }

        function playSuccessSound() {
            if (!soundEnabled) return;
            
            try {
                // Play a pleasant chime
                const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C major chord
                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';
                    
                    const now = audioContext.currentTime + (index * 0.1);
                    gainNode.gain.setValueAtTime(0, now);
                    gainNode.gain.linearRampToValueAtTime(0.2, now + 0.05);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1);
                    
                    oscillator.start(now);
                    oscillator.stop(now + 1);
                });
            } catch (e) {
                console.error('Audio error:', e);
            }
        }

        // Core Functions
        function incrementCount() {
            const dhikr = data.dhikrs[currentDhikrIndex];
            dhikr.count++;
            
            // Update display with animation
            const display = document.getElementById('countDisplay');
            display.classList.add('popping');
            setTimeout(() => display.classList.remove('popping'), 300);
            
            // Add glow effect
            const circle = document.getElementById('circleOuter');
            circle.classList.add('glowing');
            setTimeout(() => circle.classList.remove('glowing'), 1500);
            
            playClickSound();
            
            // Update daily totals
            const today = new Date().toISOString().split('T')[0];
            if (!data.dailyTotals[today]) {
                data.dailyTotals[today] = {};
            }
            if (!data.dailyTotals[today][dhikr.id]) {
                data.dailyTotals[today][dhikr.id] = 0;
            }
            data.dailyTotals[today][dhikr.id]++;
            
            // Check achievements
            checkAchievements(dhikr.count);
            
            // Check if target reached
            if (dhikr.count >= dhikr.target) {
                if (vibrationEnabled && navigator.vibrate) {
                    navigator.vibrate(2000);
                }
                playSuccessSound();
                
                dhikr.rounds++;
                dhikr.count = 0;
                
                // Show achievement for round completion
                showNotification(`أكملتِ دورة ${toArabicIndic(dhikr.rounds)}! 🎉`);
            }
            
            dhikr.updatedAt = new Date().toISOString();
            saveData();
            updateDisplay();
            
            if (!isTimerRunning) {
                startTimer();
            }
        }

        function decreaseCount() {
            const dhikr = data.dhikrs[currentDhikrIndex];
            if (dhikr.count > 0) {
                dhikr.count--;
                dhikr.updatedAt = new Date().toISOString();
                saveData();
                updateDisplay();
                playClickSound();
            }
        }

        function checkAchievements(count) {
            for (const threshold of ACHIEVEMENTS) {
                if (count >= threshold && !data.achievements.includes(threshold)) {
                    data.achievements.push(threshold);
                    saveData();
                    showAchievement(threshold);
                    break; // Show one at a time
                }
            }
        }

        function showAchievement(threshold) {
            const isSpecial = threshold === 30000;
            const modal = document.getElementById('achievementModal');
            const text = document.getElementById('achievementText');
            
            text.textContent = `وصلتِ إلى ${toArabicIndic(threshold)} تسبيحة`;
            
            if (isSpecial) {
                text.innerHTML += '<br><span style="color: #ffd700; font-size: 2rem;">👑 إنجاز مميز! 👑</span>';
            }
            
            modal.classList.add('active');
            playSuccessSound();
            
            if (vibrationEnabled && navigator.vibrate) {
                navigator.vibrate([100, 100, 100, 100, 500]);
            }
        }

        function showNotification(message) {
            // Create temporary notification
            const notif = document.createElement('div');
            notif.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
                color: white;
                padding: 15px 30px;
                border-radius: 25px;
                font-weight: 700;
                z-index: 3000;
                animation: slideDown 0.3s ease;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            `;
            notif.textContent = message;
            document.body.appendChild(notif);
            
            setTimeout(() => {
                notif.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => notif.remove(), 300);
            }, 3000);
        }

        function updateDisplay() {
            const dhikr = data.dhikrs[currentDhikrIndex];
            document.getElementById('countDisplay').textContent = toArabicIndic(dhikr.count);
            document.getElementById('currentDhikrName').textContent = dhikr.text;
            
            // Update presets active state
            document.querySelectorAll('.preset-btn').forEach((btn, index) => {
                if (data.dhikrs[index] && data.dhikrs[index].id === dhikr.id) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Timer Functions
        function startTimer() {
            if (isTimerRunning) return;
            isTimerRunning = true;
            document.getElementById('timerBtn').innerHTML = '⏸';
            
            timerInterval = setInterval(() => {
                timerSeconds++;
                updateTimerDisplay();
            }, 1000);
        }

        function stopTimer() {
            isTimerRunning = false;
            clearInterval(timerInterval);
            document.getElementById('timerBtn').innerHTML = '▶';
        }

        function toggleTimer() {
            if (isTimerRunning) {
                stopTimer();
            } else {
                startTimer();
            }
        }

        function resetTimer() {
            stopTimer();
            timerSeconds = 0;
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const hours = Math.floor(timerSeconds / 3600);
            const minutes = Math.floor((timerSeconds % 3600) / 60);
            const seconds = timerSeconds % 60;
            
            const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            document.getElementById('timerDisplay').textContent = toArabicIndic(timeStr);
        }

        // Auto Mode Functions
        function toggleAutoMode() {
            const panel = document.getElementById('autoModePanel');
            const btn = document.getElementById('autoBtn');
            
            if (panel.classList.contains('active')) {
                panel.classList.remove('active');
                btn.classList.remove('active');
                stopAutoMode();
            } else {
                panel.classList.add('active');
                btn.classList.add('active');
            }
        }

        function detectRhythm() {
            const now = Date.now();
            rhythmTaps.push(now);
            
            if (rhythmTaps.length > 3) {
                rhythmTaps.shift();
            }
            
            if (rhythmTaps.length === 3) {
                const interval1 = rhythmTaps[1] - rhythmTaps[0];
                const interval2 = rhythmTaps[2] - rhythmTaps[1];
                const avgInterval = (interval1 + interval2) / 2;
                const seconds = Math.max(0.3, Math.min(10, avgInterval / 1000));
                
                currentSpeed = Math.round(seconds * 10) / 10;
                document.getElementById('speedSlider').value = currentSpeed;
                document.getElementById('speedDisplay').textContent = toArabicIndic(currentSpeed) + ' ث';
                
                rhythmTaps = [];
                showNotification('تم تحديد الإيقاع!');
            } else {
                showNotification(`نقرة ${toArabicIndic(rhythmTaps.length)} من ٣`);
            }
        }

        function updateSpeedFromSlider(value) {
            currentSpeed = parseFloat(value);
            document.getElementById('speedDisplay').textContent = toArabicIndic(currentSpeed) + ' ث';
        }

        function startAutoMode() {
            if (isAutoMode) return;
            
            isAutoMode = true;
            showNotification('بدأ الوضع التلقائي');
            
            autoInterval = setInterval(() => {
                incrementCount();
            }, currentSpeed * 1000);
        }

        function stopAutoMode() {
            isAutoMode = false;
            clearInterval(autoInterval);
            showNotification('توقف الوضع التلقائي');
        }

        // Modal Functions
        function openEditModal() {
            const dhikr = data.dhikrs[currentDhikrIndex];
            document.getElementById('editText').value = dhikr.text;
            document.getElementById('editCount').value = dhikr.count;
            document.getElementById('editTarget').value = dhikr.target;
            document.getElementById('editRounds').value = dhikr.rounds;
            document.getElementById('editSpeed').value = dhikr.secondsPerIncrement;
            
            document.getElementById('editModal').classList.add('active');
        }

        function saveEdit() {
            const dhikr = data.dhikrs[currentDhikrIndex];
            dhikr.text = document.getElementById('editText').value || dhikr.text;
            dhikr.count = parseInt(document.getElementById('editCount').value) || 0;
            dhikr.target = parseInt(document.getElementById('editTarget').value) || 33;
            dhikr.rounds = parseInt(document.getElementById('editRounds').value) || 0;
            dhikr.secondsPerIncrement = parseFloat(document.getElementById('editSpeed').value) || 1;
            dhikr.updatedAt = new Date().toISOString();
            
            saveData();
            updateDisplay();
            renderPresets();
            closeModal('editModal');
            addLog(`تم تعديل الذِكر: ${dhikr.text}`);
        }

        function openDhikrList() {
            renderDhikrList();
            document.getElementById('dhikrListModal').classList.add('active');
        }

        function renderDhikrList() {
            const container = document.getElementById('dhikrListContainer');
            container.innerHTML = '';
            
            data.dhikrs.forEach((dhikr, index) => {
                const item = document.createElement('div');
                item.className = `dhikr-item ${index === currentDhikrIndex ? 'active' : ''}`;
                item.innerHTML = `
                    <div class="dhikr-info">
                        <div class="dhikr-text">${dhikr.text}</div>
                        <div class="dhikr-stats">العدد: ${toArabicIndic(dhikr.count)} | الهدف: ${toArabicIndic(dhikr.target)} | الدورات: ${toArabicIndic(dhikr.rounds)}</div>
                    </div>
                    <div class="dhikr-actions">
                        <button class="icon-btn" onclick="event.stopPropagation(); deleteDhikr(${index})" title="حذف">🗑</button>
                        <button class="icon-btn" onclick="event.stopPropagation(); duplicateDhikr(${index})" title="نسخ">⎘</button>
                        <button class="icon-btn" onclick="event.stopPropagation(); selectDhikr(${index})" title="اختيار">✓</button>
                        <button class="icon-btn" onclick="event.stopPropagation(); resetDhikr(${index})" title="تصفير">⟲</button>
                    </div>
                `;
                item.onclick = () => selectDhikr(index);
                container.appendChild(item);
            });
        }

        function selectDhikr(index) {
            currentDhikrIndex = index;
            updateDisplay();
            closeModal('dhikrListModal');
            addLog(`تم اختيار الذِكر: ${data.dhikrs[index].text}`);
        }

        function addNewDhikr() {
            const newDhikr = {
                id: Date.now(),
                text: 'ذِكر جديد',
                count: 0,
                rounds: 0,
                target: 33,
                secondsPerIncrement: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            data.dhikrs.unshift(newDhikr);
            saveData();
            renderDhikrList();
            addLog('تم إضافة ذِكر جديد');
        }

        function deleteDhikr(index) {
            if (data.dhikrs.length <= 1) {
                alert('لا يمكن حذف آخر ذِكر!');
                return;
            }
            if (confirm('هل أنتِ متأكدة من حذف هذا الذِكر؟')) {
                data.dhikrs.splice(index, 1);
                if (currentDhikrIndex >= data.dhikrs.length) {
                    currentDhikrIndex = data.dhikrs.length - 1;
                }
                saveData();
                updateDisplay();
                renderDhikrList();
                renderPresets();
                addLog('تم حذف ذِكر');
            }
        }

        function duplicateDhikr(index) {
            const original = data.dhikrs[index];
            const copy = {
                ...original,
                id: Date.now(),
                count: 0,
                rounds: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            data.dhikrs.splice(index + 1, 0, copy);
            saveData();
            renderDhikrList();
            addLog(`تم نسخ الذِكر: ${original.text}`);
        }

        function resetDhikr(index) {
            if (confirm('هل أنتِ متأكدة من تصفير عداد هذا الذِكر؟')) {
                data.dhikrs[index].count = 0;
                data.dhikrs[index].rounds = 0;
                data.dhikrs[index].updatedAt = new Date().toISOString();
                saveData();
                updateDisplay();
                renderDhikrList();
                addLog('تم تصفير ذِكر');
            }
        }

        function openSettings() {
            updateLogsDisplay();
            document.getElementById('settingsModal').classList.add('active');
        }

        function openCalendar() {
            renderCalendar();
            document.getElementById('calendarModal').classList.add('active');
        }

        function renderCalendar() {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            
            document.getElementById('currentMonthYear').textContent = 
                currentCalendarDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' });
            
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const daysInMonth = lastDay.getDate();
            const startingDay = firstDay.getDay();
            
            const grid = document.getElementById('calendarGrid');
            grid.innerHTML = '';
            
            // Empty cells for days before start of month
            for (let i = 0; i < startingDay; i++) {
                const empty = document.createElement('div');
                grid.appendChild(empty);
            }
            
            // Days
            for (let day = 1; day <= daysInMonth; day++) {
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayData = data.dailyTotals[dateKey];
                const total = dayData ? Object.values(dayData).reduce((a, b) => a + b, 0) : 0;
                
                const cell = document.createElement('div');
                cell.className = `day-cell ${total > 0 ? 'has-data' : ''}`;
                cell.innerHTML = `
                    <div class="day-number">${toArabicIndic(day)}</div>
                    ${total > 0 ? `<div class="day-count">${toArabicIndic(total)}</div>` : ''}
                `;
                cell.onclick = () => showDayDetails(dateKey, total);
                grid.appendChild(cell);
            }
        }

        function changeMonth(delta) {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
            renderCalendar();
        }

        function showDayDetails(dateKey, total) {
            if (total === 0) return;
            
            const dayData = data.dailyTotals[dateKey];
            let details = `إجمالي التسبيحات: ${toArabicIndic(total)}\n\n`;
            
            for (const [dhikrId, count] of Object.entries(dayData)) {
                const dhikr = data.dhikrs.find(d => d.id == dhikrId);
                if (dhikr) {
                    details += `${dhikr.text}: ${toArabicIndic(count)}\n`;
                }
            }
            
            alert(details);
        }

        function openAboutModal() {
            document.getElementById('aboutModal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Toggles
        function toggleSound() {
            soundEnabled = !soundEnabled;
            data.settings.sound = soundEnabled;
            saveData();
            document.getElementById('soundToggle').classList.toggle('active', soundEnabled);
        }

        function toggleVibration() {
            vibrationEnabled = !vibrationEnabled;
            data.settings.vibration = vibrationEnabled;
            saveData();
            document.getElementById('vibrationToggle').classList.toggle('active', vibrationEnabled);
        }

        // Export/Import
        function exportData() {
            const exportObj = {
                ...data,
                exportDate: new Date().toISOString(),
                version: '1.0'
            };
            
            const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `مسبحة_التقى_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            addLog('تم تصدير البيانات');
            showNotification('تم تصدير البيانات بنجاح!');
        }

        function importData(input) {
            const file = input.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    
                    if (!confirm('هل تريد دمج البيانات المستوردة مع البيانات الحالية؟ اختر "إلغاء" للاستبدال الكامل.')) {
                        // Replace all data
                        data = imported;
                        currentDhikrIndex = 0;
                    } else {
                        // Merge data
                        mergeData(imported);
                    }
                    
                    saveData();
                    updateDisplay();
                    renderPresets();
                    closeModal('settingsModal');
                    addLog('تم استيراد البيانات');
                    showNotification('تم استيراد البيانات بنجاح!');
                } catch (err) {
                    alert('خطأ في قراءة الملف: ' + err.message);
                }
            };
            reader.readAsText(file);
            input.value = '';
        }

        function mergeData(imported) {
            // Merge dhikrs - add new ones, sum counts for existing
            imported.dhikrs.forEach(importedDhikr => {
                const existing = data.dhikrs.find(d => d.text === importedDhikr.text);
                if (existing) {
                    existing.count += importedDhikr.count;
                    existing.rounds += importedDhikr.rounds;
                    existing.target = Math.max(existing.target, importedDhikr.target);
                } else {
                    data.dhikrs.push(importedDhikr);
                }
            });
            
            // Merge daily totals
            for (const [date, totals] of Object.entries(imported.dailyTotals || {})) {
                if (!data.dailyTotals[date]) {
                    data.dailyTotals[date] = {};
                }
                for (const [dhikrId, count] of Object.entries(totals)) {
                    data.dailyTotals[date][dhikrId] = (data.dailyTotals[date][dhikrId] || 0) + count;
                }
            }
            
            // Merge achievements
            imported.achievements.forEach(ach => {
                if (!data.achievements.includes(ach)) {
                    data.achievements.push(ach);
                }
            });
        }

        function changeAccentColor(color) {
            document.documentElement.style.setProperty('--accent-rose', color);
            data.settings.accentColor = color;
            saveData();
        }

        // Rose Physics
        function initRosePhysics() {
            const rose = document.getElementById('floatingRose');
            let isDragging = false;
            let currentX = window.innerWidth - 90;
            let currentY = window.innerHeight - 90;
            let velocityX = 0;
            let velocityY = 0;
            let lastX = currentX;
            let lastY = currentY;
            let lastTime = Date.now();
            
            rose.style.left = currentX + 'px';
            rose.style.top = currentY + 'px';
            
            rose.addEventListener('mousedown', startDrag);
            rose.addEventListener('touchstart', startDrag, { passive: false });
            
            function startDrag(e) {
                isDragging = true;
                rose.classList.add('dragging');
                e.preventDefault();
                
                const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
                
                const offsetX = clientX - currentX;
                const offsetY = clientY - currentY;
                
                function move(e) {
                    if (!isDragging) return;
                    e.preventDefault();
                    
                    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
                    
                    const newX = clientX - offsetX;
                    const newY = clientY - offsetY;
                    
                    const now = Date.now();
                    const dt = now - lastTime;
                    
                    if (dt > 0) {
                        velocityX = (newX - lastX) / dt * 15;
                        velocityY = (newY - lastY) / dt * 15;
                    }
                    
                    lastX = newX;
                    lastY = newY;
                    lastTime = now;
                    
                    currentX = Math.max(0, Math.min(window.innerWidth - 70, newX));
                    currentY = Math.max(0, Math.min(window.innerHeight - 70, newY));
                    
                    rose.style.left = currentX + 'px';
                    rose.style.top = currentY + 'px';
                    
                    createTrail(currentX + 35, currentY + 35);
                }
                
                function end() {
                    isDragging = false;
                    rose.classList.remove('dragging');
                    
                    // Bounce physics
                    function animate() {
                        if (isDragging) return;
                        
                        currentX += velocityX;
                        currentY += velocityY;
                        
                        const maxX = window.innerWidth - 70;
                        const maxY = window.innerHeight - 70;
                        
                        // Bounce with damping based on velocity
                        if (currentX <= 0) {
                            currentX = 0;
                            velocityX = Math.abs(velocityX) * 0.7;
                        } else if (currentX >= maxX) {
                            currentX = maxX;
                            velocityX = -Math.abs(velocityX) * 0.7;
                        }
                        
                        if (currentY <= 0) {
                            currentY = 0;
                            velocityY = Math.abs(velocityY) * 0.7;
                        } else if (currentY >= maxY) {
                            currentY = maxY;
                            velocityY = -Math.abs(velocityY) * 0.7;
                        }
                        
                        velocityX *= 0.95;
                        velocityY *= 0.95;
                        
                        rose.style.left = currentX + 'px';
                        rose.style.top = currentY + 'px';
                        
                        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    
                    animate();
                    
                    document.removeEventListener('mousemove', move);
                    document.removeEventListener('mouseup', end);
                    document.removeEventListener('touchmove', move);
                    document.removeEventListener('touchend', end);
                }
                
                document.addEventListener('mousemove', move);
                document.addEventListener('mouseup', end);
                document.addEventListener('touchmove', move, { passive: false });
                document.addEventListener('touchend', end);
            }
        }

        function createTrail(x, y) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = `radial-gradient(circle, var(--accent-rose) 0%, transparent 70%)`;
            
            document.getElementById('roseParticles').appendChild(particle);
            
            particle.animate([
                { transform: 'scale(1)', opacity: 0.6 },
                { transform: 'scale(0)', opacity: 0 }
            ], {
                duration: 500,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Render Presets
        function renderPresets() {
            const container = document.getElementById('presetsGrid');
            container.innerHTML = '';
            
            data.dhikrs.slice(0, 9).forEach((dhikr, index) => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<span>${dhikr.text}</span>`;
                if (index === currentDhikrIndex) {
                    btn.classList.add('active');
                }
                btn.onclick = () => selectDhikr(index);
                container.appendChild(btn);
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Set start date
            const startDate = new Date(data.firstUse);
            document.getElementById('startDate').textContent = 
                'بدأت في: ' + startDate.toLocaleDateString('ar-EG', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            
            // Apply saved accent color
            if (data.settings.accentColor) {
                document.documentElement.style.setProperty('--accent-rose', data.settings.accentColor);
                document.getElementById('accentColor').value = data.settings.accentColor;
            }
            
            // Apply saved toggles
            soundEnabled = data.settings.sound;
            vibrationEnabled = data.settings.vibration;
            document.getElementById('soundToggle').classList.toggle('active', soundEnabled);
            document.getElementById('vibrationToggle').classList.toggle('active', vibrationEnabled);
            
            updateDisplay();
            renderPresets();
            initRosePhysics();
            
            // Close modals on backdrop click
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        overlay.classList.remove('active');
                    }
                });
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                incrementCount();
            } else if (e.code === 'ArrowUp') {
                e.preventDefault();
                if (currentDhikrIndex > 0) {
                    selectDhikr(currentDhikrIndex - 1);
                }
            } else if (e.code === 'ArrowDown') {
                e.preventDefault();
                if (currentDhikrIndex < data.dhikrs.length - 1) {
                    selectDhikr(currentDhikrIndex + 1);
                }
            }
        });

// ===== Responsive Live Wallpaper Engine (8-12s seamless loop, high performance) =====
(function initLiveWallpaper() {
    const canvas = document.getElementById('wallpaperCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const fallbackConfig = {
        dimensions: { width: 1080, height: 1920 },
        loopSeconds: 10,
        palette: {
            burgundy: '#8b1538',
            rose: '#e85c8a',
            silver: '#cfc7ca'
        },
        layers: [
            { count: 34, radius: [18, 48], alpha: [0.06, 0.2], drift: 20, parallax: 0.18, speed: 0.34, colorWeights: { burgundy: 0.78, rose: 0.16, silver: 0.06 } },
            { count: 28, radius: [10, 30], alpha: [0.1, 0.3], drift: 36, parallax: 0.34, speed: 0.5, colorWeights: { burgundy: 0.65, rose: 0.23, silver: 0.12 } },
            { count: 18, radius: [6, 18], alpha: [0.14, 0.48], drift: 50, parallax: 0.58, speed: 0.75, colorWeights: { burgundy: 0.55, rose: 0.2, silver: 0.25 } }
        ]
    };

    function hexToRgb(hex) {
        const clean = hex.replace('#', '');
        const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
        const int = parseInt(full, 16);
        return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
    }

    function weightedChoice(weights) {
        const entries = Object.entries(weights);
        const total = entries.reduce((s, [, v]) => s + v, 0);
        let cursor = Math.random() * total;
        for (const [name, weight] of entries) {
            cursor -= weight;
            if (cursor <= 0) return name;
        }
        return entries[0][0];
    }

    async function loadConfig() {
        try {
            const res = await fetch('wallpaper_animation.json', { cache: 'no-store' });
            if (!res.ok) throw new Error('failed config');
            return await res.json();
        } catch {
            return fallbackConfig;
        }
    }

    loadConfig().then((config) => {
        const palette = {
            burgundy: hexToRgb(config.palette.burgundy),
            rose: hexToRgb(config.palette.rose),
            silver: hexToRgb(config.palette.silver)
        };

        const particles = [];
        for (const layer of config.layers) {
            for (let i = 0; i < layer.count; i++) {
                particles.push({
                    baseX: Math.random() * config.dimensions.width,
                    baseY: Math.random() * config.dimensions.height,
                    radius: layer.radius[0] + Math.random() * (layer.radius[1] - layer.radius[0]),
                    alpha: layer.alpha[0] + Math.random() * (layer.alpha[1] - layer.alpha[0]),
                    drift: layer.drift,
                    speed: layer.speed * (0.78 + Math.random() * 0.5),
                    phase: Math.random() * Math.PI * 2,
                    wobble: 0.8 + Math.random() * 1.1,
                    parallax: layer.parallax,
                    colorName: weightedChoice(layer.colorWeights)
                });
            }
        }

        let w = 1;
        let h = 1;
        let px = 0;
        let py = 0;
        let spx = 0;
        let spy = 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = Math.max(window.innerWidth, 1);
            h = Math.max(window.innerHeight, 1);
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        window.addEventListener('resize', resize, { passive: true });
        window.addEventListener('mousemove', (e) => {
            px = ((e.clientX / w) - 0.5) * 18;
            py = ((e.clientY / h) - 0.5) * 18;
        }, { passive: true });
        window.addEventListener('deviceorientation', (e) => {
            if (typeof e.gamma === 'number' && typeof e.beta === 'number') {
                px = Math.max(-10, Math.min(10, e.gamma * 0.4));
                py = Math.max(-10, Math.min(10, e.beta * 0.2));
            }
        }, { passive: true });

        resize();

        function frame(now) {
            if (prefersReducedMotion) return;

            const t = ((now % (config.loopSeconds * 1000)) / (config.loopSeconds * 1000)) * Math.PI * 2;
            const sx = w / config.dimensions.width;
            const sy = h / config.dimensions.height;
            const scale = (sx + sy) * 0.5;

            spx += (px - spx) * 0.045;
            spy += (py - spy) * 0.045;

            ctx.clearRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            for (const p of particles) {
                const wave = t * p.speed + p.phase;
                const driftX = Math.sin(wave) * p.drift;
                const driftY = Math.cos(wave * 0.95 + p.phase) * p.drift * 1.33;
                const microX = Math.sin((t + p.phase) * (1.55 * p.wobble)) * p.drift * 0.32;
                const microY = Math.cos((t + p.phase) * (1.35 * p.wobble)) * p.drift * 0.24;

                const x = ((p.baseX + driftX + microX) * sx + (spx * p.parallax) + w) % w;
                const y = ((p.baseY + driftY + microY) * sy + (spy * p.parallax) + h) % h;
                const r = p.radius * scale;
                const pulse = 0.76 + 0.24 * Math.sin(wave * 1.2 + p.phase);
                const a = p.alpha * pulse;
                const c = palette[p.colorName];

                const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2.7);
                g.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`);
                g.addColorStop(0.38, `rgba(${c.r}, ${c.g}, ${c.b}, ${a * 0.45})`);
                g.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

                ctx.beginPath();
                ctx.fillStyle = g;
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalCompositeOperation = 'source-over';
            requestAnimationFrame(frame);
        }

        if (prefersReducedMotion) {
            ctx.clearRect(0, 0, w, h);
        } else {
            requestAnimationFrame(frame);
        }
    });
})();
