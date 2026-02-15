<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مسبحة التُقَى</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #f8f9fa;
            --bg-secondary: #ffffff;
            --accent-rose: #e85c8a;
            --accent-burgundy: #8b1538;
            --accent-silver: #c0c0c0;
            --text-primary: #2d3436;
            --text-secondary: #636e72;
            --glass-bg: rgba(255, 255, 255, 0.7);
            --glass-border: rgba(255, 255, 255, 0.9);
            --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.08);
            --shadow-glow: 0 0 40px rgba(232, 92, 138, 0.15);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 50%, #f0f2f5 100%);
            min-height: 100vh;
            overflow-x: hidden;
            color: var(--text-primary);
        }

        /* Silver Shiny Background */
        .silver-bg {
            background: 
                radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(232, 92, 138, 0.05) 0%, transparent 50%),
                linear-gradient(180deg, #fafbfc 0%, #f0f2f5 100%);
            position: fixed;
            inset: 0;
            z-index: -1;
        }

        .silver-shine {
            position: absolute;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(255, 255, 255, 0.4) 50%,
                transparent 70%
            );
            animation: shine 8s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes shine {
            0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            50% { transform: translateX(0%) translateY(0%) rotate(45deg); }
        }

        /* Main Container */
        .app-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
            position: relative;
        }

        /* Header */
        .header {
            text-align: center;
            padding: 20px 0;
            position: relative;
        }

        .title {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-burgundy) 0%, var(--accent-rose) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 10px rgba(139, 21, 56, 0.1);
            letter-spacing: -1px;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-top: 5px;
            font-weight: 400;
        }

        /* Timer Section */
        .timer-section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--shadow-soft);
        }

        .timer-display {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-burgundy);
            font-family: 'Cairo', monospace;
            min-width: 120px;
            text-align: center;
            letter-spacing: 2px;
        }

        .timer-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(232, 92, 138, 0.3);
            font-size: 1rem;
        }

        .timer-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(232, 92, 138, 0.4);
        }

        .timer-btn:active {
            transform: scale(0.95);
        }

        /* Main Circle */
        .circle-container {
            position: relative;
            width: 320px;
            height: 320px;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .circle-outer {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.8) 100%);
            box-shadow: 
                0 20px 60px rgba(0,0,0,0.1),
                inset 0 -10px 30px rgba(0,0,0,0.05),
                inset 0 10px 30px rgba(255,255,255,0.8),
                0 0 0 1px rgba(255,255,255,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .circle-outer.glowing {
            animation: glowPulse 1.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
            0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 30px rgba(232, 92, 138, 0.2); }
            50% { box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 60px rgba(232, 92, 138, 0.4), 0 0 100px rgba(232, 92, 138, 0.2); }
        }

        .circle-inner {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 
                inset 0 5px 15px rgba(0,0,0,0.05),
                0 5px 20px rgba(0,0,0,0.08);
            cursor: pointer;
            transition: transform 0.1s ease;
        }

        .circle-inner:active {
            transform: scale(0.98);
        }

        .circle-inner::before {
            content: '';
            position: absolute;
            inset: 10px;
            border-radius: 50%;
            border: 2px solid transparent;
            background: linear-gradient(135deg, var(--accent-rose), var(--accent-burgundy)) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.3;
        }

        .count-number {
            font-size: 5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-burgundy) 0%, var(--accent-rose) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
            font-family: 'Cairo', sans-serif;
            transition: all 0.3s ease;
        }

        .count-number.popping {
            animation: popNumber 0.3s ease;
        }

        @keyframes popNumber {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .count-label {
            font-size: 1rem;
            color: var(--text-secondary);
            margin-top: 10px;
            font-weight: 600;
        }

        /* Pencil Icon */
        .edit-btn {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            border: 3px solid white;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(232, 92, 138, 0.4);
            transition: all 0.3s ease;
            z-index: 10;
            font-size: 1.2rem;
        }

        .edit-btn:hover {
            transform: translateX(-50%) scale(1.1);
            box-shadow: 0 6px 20px rgba(232, 92, 138, 0.5);
        }

        /* Dhikr Name Above Circle */
        .current-dhikr-name {
            text-align: center;
            margin-bottom: 20px;
            padding: 15px 30px;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--shadow-soft);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-burgundy);
            font-family: 'Noto Naskh Arabic', serif;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Controls */
        .controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .control-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
            color: var(--accent-burgundy);
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 
                0 4px 15px rgba(0,0,0,0.08),
                0 0 0 1px rgba(0,0,0,0.05);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .control-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .control-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(232, 92, 138, 0.3);
            color: white;
        }

        .control-btn:hover::before {
            opacity: 1;
        }

        .control-btn span {
            position: relative;
            z-index: 1;
        }

        .control-btn:active {
            transform: translateY(-1px) scale(0.98);
        }

        .control-btn.active {
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            color: white;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(232, 92, 138, 0.4); }
            50% { box-shadow: 0 0 0 10px rgba(232, 92, 138, 0); }
        }

        /* Preset Dhikrs Section */
        .presets-section {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 25px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--shadow-soft);
            margin-bottom: 20px;
        }

        .presets-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent-burgundy);
            margin-bottom: 15px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .presets-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
        }

        .preset-btn {
            padding: 12px 15px;
            border: 2px solid transparent;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 12px;
            cursor: pointer;
            font-family: 'Noto Naskh Arabic', serif;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .preset-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .preset-btn:hover, .preset-btn.active {
            border-color: var(--accent-rose);
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(232, 92, 138, 0.2);
            color: white;
        }

        .preset-btn:hover::before, .preset-btn.active::before {
            opacity: 1;
        }

        .preset-btn span {
            position: relative;
            z-index: 1;
        }

        /* Auto Mode Panel */
        .auto-mode-panel {
            background: linear-gradient(135deg, rgba(232, 92, 138, 0.1) 0%, rgba(139, 21, 56, 0.05) 100%);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 20px;
            border: 2px solid rgba(232, 92, 138, 0.2);
            display: none;
        }

        .auto-mode-panel.active {
            display: block;
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .auto-controls {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .rhythm-detector {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }

        .detect-btn {
            padding: 12px 25px;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(232, 92, 138, 0.3);
        }

        .detect-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(232, 92, 138, 0.4);
        }

        .speed-display {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent-burgundy);
            min-width: 80px;
            text-align: center;
        }

        .slider-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .speed-slider {
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background: linear-gradient(90deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            outline: none;
            -webkit-appearance: none;
        }

        .speed-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: white;
            border: 3px solid var(--accent-rose);
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: transform 0.2s ease;
        }

        .speed-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }

        .slider-labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        /* Sound & Vibration Toggles */
        .toggles-section {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        .toggle-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: var(--glass-bg);
            border: 2px solid transparent;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            color: var(--text-secondary);
        }

        .toggle-btn:hover {
            border-color: var(--accent-rose);
            transform: translateY(-2px);
        }

        .toggle-btn.active {
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            color: white;
            border-color: transparent;
        }

        /* Custom Rose */
        .floating-rose {
            position: fixed;
            width: 70px;
            height: 70px;
            cursor: grab;
            z-index: 1000;
            filter: drop-shadow(0 5px 15px rgba(232, 92, 138, 0.4));
            transition: filter 0.3s ease;
            right: 20px;
            bottom: 20px;
        }

        .floating-rose:active {
            cursor: grabbing;
        }

        .floating-rose.dragging {
            filter: drop-shadow(0 10px 30px rgba(232, 92, 138, 0.6));
        }

        .rose-svg {
            width: 100%;
            height: 100%;
            animation: roseGlow 3s ease-in-out infinite;
        }

        @keyframes roseGlow {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(232, 92, 138, 0.4)) brightness(1); }
            50% { filter: drop-shadow(0 0 30px rgba(232, 92, 138, 0.8)) brightness(1.1); }
        }

        .rose-particles {
            position: absolute;
            inset: -20px;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent-rose);
            border-radius: 50%;
            opacity: 0;
        }

        /* Modals */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
        }

        .modal-overlay.active {
            display: flex;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 25px;
            padding: 30px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0,0,0,0.2);
            position: relative;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-burgundy);
        }

        .close-modal {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: rgba(0,0,0,0.05);
            cursor: pointer;
            font-size: 1.5rem;
            color: var(--text-secondary);
            transition: all 0.3s ease;
        }

        .close-modal:hover {
            background: rgba(232, 92, 138, 0.1);
            color: var(--accent-rose);
            transform: rotate(90deg);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .form-input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid rgba(0,0,0,0.1);
            border-radius: 12px;
            font-size: 1rem;
            font-family: 'Cairo', sans-serif;
            transition: all 0.3s ease;
            background: white;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--accent-rose);
            box-shadow: 0 0 0 3px rgba(232, 92, 138, 0.1);
        }

        .btn-primary {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(232, 92, 138, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(232, 92, 138, 0.4);
        }

        .btn-secondary {
            width: 100%;
            padding: 12px;
            background: rgba(0,0,0,0.05);
            color: var(--text-primary);
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
        }

        .btn-secondary:hover {
            background: rgba(0,0,0,0.1);
        }

        /* Dhikr List in Modal */
        .dhikr-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-height: 400px;
            overflow-y: auto;
        }

        .dhikr-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: white;
            border-radius: 12px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .dhikr-item:hover {
            border-color: var(--accent-rose);
            transform: translateX(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .dhikr-item.active {
            border-color: var(--accent-rose);
            background: linear-gradient(135deg, rgba(232, 92, 138, 0.05) 0%, rgba(139, 21, 56, 0.05) 100%);
        }

        .dhikr-info {
            flex: 1;
        }

        .dhikr-text {
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 5px;
            font-family: 'Noto Naskh Arabic', serif;
        }

        .dhikr-stats {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .dhikr-actions {
            display: flex;
            gap: 5px;
        }

        .icon-btn {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: none;
            background: rgba(0,0,0,0.05);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .icon-btn:hover {
            background: var(--accent-rose);
            color: white;
            transform: scale(1.1);
        }

        /* Achievement Modal */
        .achievement-modal {
            text-align: center;
            padding: 40px;
        }

        .treasure-chest {
            width: 150px;
            height: 150px;
            margin: 0 auto 30px;
            position: relative;
        }

        .chest-icon {
            font-size: 100px;
            animation: bounceChest 1s ease infinite;
        }

        @keyframes bounceChest {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .achievement-title {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-burgundy) 0%, var(--accent-rose) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
        }

        .achievement-text {
            font-size: 1.5rem;
            color: var(--text-primary);
            font-family: 'Noto Naskh Arabic', serif;
        }

        /* About Modal */
        .about-content {
            text-align: center;
        }

        .about-rose {
            font-size: 60px;
            margin-bottom: 20px;
            animation: roseGlow 3s ease-in-out infinite;
        }

        .about-title {
            font-size: 2rem;
            font-weight: 800;
            color: var(--accent-burgundy);
            margin-bottom: 10px;
        }

        .about-subtitle {
            font-size: 1.2rem;
            color: var(--accent-rose);
            font-weight: 700;
            margin-bottom: 20px;
        }

        .about-message {
            font-size: 1rem;
            line-height: 1.8;
            color: var(--text-primary);
            margin-bottom: 20px;
            text-align: right;
            padding: 20px;
            background: rgba(0,0,0,0.03);
            border-radius: 15px;
            font-family: 'Noto Naskh Arabic', serif;
        }

        .about-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px;
            background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(131, 58, 180, 0.3);
        }

        /* Calendar Styles */
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            margin-top: 20px;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .calendar-nav {
            display: flex;
            gap: 10px;
        }

        .nav-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: rgba(0,0,0,0.05);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-btn:hover {
            background: var(--accent-rose);
            color: white;
        }

        .day-cell {
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 10px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .day-cell:hover {
            border-color: var(--accent-rose);
            transform: scale(1.05);
        }

        .day-cell.has-data {
            background: linear-gradient(135deg, rgba(232, 92, 138, 0.1) 0%, rgba(139, 21, 56, 0.05) 100%);
            border-color: var(--accent-rose);
        }

        .day-cell .day-number {
            font-weight: 700;
            color: var(--text-primary);
        }

        .day-cell .day-count {
            font-size: 0.7rem;
            color: var(--accent-rose);
            font-weight: 700;
        }

        .weekday-header {
            text-align: center;
            font-weight: 700;
            color: var(--accent-burgundy);
            padding: 10px;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 480px) {
            .title { font-size: 2rem; }
            .circle-container { width: 280px; height: 280px; }
            .circle-inner { width: 240px; height: 240px; }
            .count-number { font-size: 4rem; }
            .presets-grid { grid-template-columns: 1fr; }
            .controls { gap: 10px; }
            .control-btn { width: 50px; height: 50px; font-size: 1.2rem; }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); border-radius: 4px; }
        ::-webkit-scrollbar-thumb { background: var(--accent-rose); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--accent-burgundy); }
    </style>
</head>
<body>
    <div class="silver-bg">
        <div class="silver-shine"></div>
    </div>

    <div class="app-container">
        <!-- Header -->
        <header class="header">
            <h1 class="title">مسبحة التُقَى</h1>
            <p class="subtitle" id="startDate">بدأت في: ٩ فبراير ٢٠٢٦</p>
        </header>

        <!-- Sound & Vibration Toggles -->
        <div class="toggles-section">
            <button class="toggle-btn active" id="soundToggle" onclick="toggleSound()">
                <span>🔊</span>
                <span>الصوت</span>
            </button>
            <button class="toggle-btn active" id="vibrationToggle" onclick="toggleVibration()">
                <span>📳</span>
                <span>الاهتزاز</span>
            </button>
        </div>

        <!-- Timer Section -->
        <div class="timer-section">
            <button class="timer-btn" onclick="resetTimer()" title="تصفير">⟲</button>
            <div class="timer-display" id="timerDisplay">٠٠:٠٠:٠٠</div>
            <button class="timer-btn" onclick="toggleTimer()" id="timerBtn" title="تشغيل/إيقاف">⏸</button>
        </div>

        <!-- Current Dhikr Name -->
        <div class="current-dhikr-name" id="currentDhikrName">
            سُبْحَانَ اللَّهِ
        </div>

        <!-- Main Circle -->
        <div class="circle-container">
            <button class="edit-btn" onclick="openEditModal()" title="تعديل">✎</button>
            
            <div class="circle-outer" id="circleOuter">
                <div class="circle-inner" id="mainCircle" onclick="incrementCount()">
                    <div class="count-number" id="countDisplay">٠</div>
                    <div class="count-label">العدد الحالي</div>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <div class="controls">
            <button class="control-btn" onclick="decreaseCount()" title="نقص">
                <span>−</span>
            </button>
            <button class="control-btn" onclick="openDhikrList()" title="قائمة الأذكار">
                <span>📋</span>
            </button>
            <button class="control-btn" onclick="toggleAutoMode()" id="autoBtn" title="وضع تلقائي">
                <span>▶</span>
            </button>
            <button class="control-btn" onclick="openSettings()" title="الإعدادات">
                <span>⚙</span>
            </button>
            <button class="control-btn" onclick="openCalendar()" title="التقويم">
                <span>📅</span>
            </button>
        </div>

        <!-- Auto Mode Panel -->
        <div class="auto-mode-panel" id="autoModePanel">
            <div class="auto-controls">
                <div class="rhythm-detector">
                    <button class="detect-btn" onclick="detectRhythm()">
                        عَيِّن الإيقاع (٣ نقرات)
                    </button>
                    <div class="speed-display" id="speedDisplay">١ ث</div>
                </div>
                
                <div class="slider-container">
                    <input type="range" min="0.3" max="10" step="0.1" value="1" class="speed-slider" id="speedSlider" oninput="updateSpeedFromSlider(this.value)">
                    <div class="slider-labels">
                        <span>سريع (٠.٣ث)</span>
                        <span>بطيء (١٠ث)</span>
                    </div>
                </div>

                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button class="detect-btn" onclick="startAutoMode()" style="flex: 1;">ابدأ</button>
                    <button class="detect-btn" onclick="stopAutoMode()" style="flex: 1; background: #636e72;">أوقف</button>
                </div>
            </div>
        </div>

        <!-- Preset Dhikrs -->
        <div class="presets-section">
            <div class="presets-title">
                <span>📿</span>
                <span>الأذكار المختارة</span>
            </div>
            <div class="presets-grid" id="presetsGrid">
                <!-- Presets will be added by JS -->
            </div>
        </div>
    </div>

    <!-- Floating Rose -->
    <div class="floating-rose" id="floatingRose" onclick="openAboutModal()">
        <svg class="rose-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#c44569;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8b1538;stop-opacity:1" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Rose petals -->
            <path d="M50 20 C30 20 20 35 20 50 C20 65 35 80 50 85 C65 80 80 65 80 50 C80 35 70 20 50 20 Z" fill="url(#roseGrad)" filter="url(#glow)"/>
            <path d="M50 25 C35 25 28 38 28 50 C28 62 40 72 50 75 C60 72 72 62 72 50 C72 38 65 25 50 25 Z" fill="#ff8fab" opacity="0.6"/>
            <path d="M50 30 C40 30 35 40 35 50 C35 60 45 68 50 70 C55 68 65 60 65 50 C65 40 60 30 50 30 Z" fill="#ffb3c6" opacity="0.7"/>
            <!-- Stem -->
            <path d="M50 85 Q50 95 45 100 L55 100 Q50 95 50 85" fill="#2d6a4f"/>
            <!-- Leaves -->
            <ellipse cx="40" cy="90" rx="8" ry="4" fill="#40916c" transform="rotate(-30 40 90)"/>
            <ellipse cx="60" cy="88" rx="8" ry="4" fill="#40916c" transform="rotate(30 60 88)"/>
        </svg>
        <div class="rose-particles" id="roseParticles"></div>
    </div>

    <!-- Edit Modal -->
    <div class="modal-overlay" id="editModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">تعديل الذِكر</h2>
                <button class="close-modal" onclick="closeModal('editModal')">×</button>
            </div>
            <div class="form-group">
                <label class="form-label">اسم الذِكر</label>
                <input type="text" class="form-input" id="editText" placeholder="أدخل نص الذِكر">
            </div>
            <div class="form-group">
                <label class="form-label">العدد الحالي</label>
                <input type="number" class="form-input" id="editCount" placeholder="٠">
            </div>
            <div class="form-group">
                <label class="form-label">العدد المستهدف</label>
                <input type="number" class="form-input" id="editTarget" placeholder="٣٣">
            </div>
            <div class="form-group">
                <label class="form-label">عدد الدورات</label>
                <input type="number" class="form-input" id="editRounds" placeholder="٠">
            </div>
            <div class="form-group">
                <label class="form-label">السرعة (ثانية لكل تسبيحة)</label>
                <input type="number" class="form-input" id="editSpeed" placeholder="١" step="0.1">
            </div>
            <button class="btn-primary" onclick="saveEdit()">حفظ التغييرات</button>
            <button class="btn-secondary" onclick="closeModal('editModal')">إلغاء</button>
        </div>
    </div>

    <!-- Dhikr List Modal -->
    <div class="modal-overlay" id="dhikrListModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">قائمة الأذكار</h2>
                <button class="close-modal" onclick="closeModal('dhikrListModal')">×</button>
            </div>
            <button class="btn-primary" onclick="addNewDhikr()" style="margin-bottom: 15px;">+ إضافة ذِكر جديد</button>
            <div class="dhikr-list" id="dhikrListContainer">
                <!-- Dhikrs will be added by JS -->
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay" id="settingsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">الإعدادات</h2>
                <button class="close-modal" onclick="closeModal('settingsModal')">×</button>
            </div>
            
            <div class="form-group">
                <label class="form-label">لون التمييز</label>
                <input type="color" class="form-input" id="accentColor" value="#e85c8a" onchange="changeAccentColor(this.value)">
            </div>

            <div class="form-group">
                <label class="form-label">تصدير البيانات</label>
                <button class="btn-primary" onclick="exportData()">📥 تصدير كـ JSON</button>
            </div>

            <div class="form-group">
                <label class="form-label">استيراد البيانات</label>
                <input type="file" class="form-input" id="importFile" accept=".json" onchange="importData(this)">
            </div>

            <div class="form-group">
                <label class="form-label">السجلات</label>
                <div id="logsContainer" style="max-height: 200px; overflow-y: auto; background: rgba(0,0,0,0.05); padding: 10px; border-radius: 8px; font-size: 0.85rem;">
                    لا توجد سجلات
                </div>
            </div>

            <button class="btn-secondary" onclick="closeModal('settingsModal')">إغلاق</button>
        </div>
    </div>

    <!-- Calendar Modal -->
    <div class="modal-overlay" id="calendarModal">
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h2 class="modal-title" id="calendarTitle">التقويم</h2>
                <button class="close-modal" onclick="closeModal('calendarModal')">×</button>
            </div>
            <div class="calendar-header">
                <div class="calendar-nav">
                    <button class="nav-btn" onclick="changeMonth(-1)">‹</button>
                    <button class="nav-btn" onclick="changeMonth(1)">›</button>
                </div>
                <div style="font-weight: 700; color: var(--accent-burgundy);" id="currentMonthYear"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; margin-bottom: 10px;">
                <div class="weekday-header">أحد</div>
                <div class="weekday-header">إثن</div>
                <div class="weekday-header">ثل</div>
                <div class="weekday-header">أرب</div>
                <div class="weekday-header">خم</div>
                <div class="weekday-header">جم</div>
                <div class="weekday-header">سب</div>
            </div>
            <div class="calendar-grid" id="calendarGrid"></div>
        </div>
    </div>

    <!-- Achievement Modal -->
    <div class="modal-overlay" id="achievementModal">
        <div class="modal-content achievement-modal">
            <div class="treasure-chest">
                <div class="chest-icon">🎁</div>
            </div>
            <h2 class="achievement-title">تهانينا!</h2>
            <p class="achievement-text" id="achievementText">وصلتِ إلى ١٠٠٠ تسبيحة</p>
            <h3 style="font-size: 2rem; color: var(--accent-rose); margin-top: 20px; font-family: 'Noto Naskh Arabic', serif;">تَقَبَّلَ اللَّهُ</h3>
            <button class="btn-primary" onclick="closeModal('achievementModal')" style="margin-top: 30px;">الحمد لله</button>
        </div>
    </div>

    <!-- About Modal -->
    <div class="modal-overlay" id="aboutModal">
        <div class="modal-content about-content">
            <div class="about-rose">🌹</div>
            <h2 class="about-title">مسبحة التُقَى</h2>
            <div class="about-subtitle">From: التُقَى<br>Toqa Ayman Aly Shabeeb</div>
            
            <div class="about-message">
                <p>هذا العمل جزء من مشروع التُقَى، وهو صدقة جارية خالصة لوجه الله تعالى.</p>
                <p>ويمكنكم الاقتباس والنشر منه بحرية.</p>
                <p style="margin-top: 15px; font-weight: 700;">الدال على الخير كفاعله</p>
                <p>شاركوا المسبحة وتابعونا، نسعد بمشاركتكم الأجر عبر مقترحاتكم وآرائكم لتطوير مشروع التُقَى، ويكون في ميزان حسناتكم بإذن الله.</p>
                <p style="margin-top: 20px; font-size: 1.1rem; color: var(--accent-burgundy);">اللهم ارزقنا الفردوس الأعلى والنظر إلى وجهك الكريم 🤲</p>
            </div>

            <div class="about-links">
                <a href="https://www.instagram.com/toqa_a_shabib_20?igsh=NTB0azBvNWNsNTA0" target="_blank" class="social-link">
                    <span>📷</span>
                    <span>تابعيني على Instagram</span>
                </a>
                <a href="#" class="social-link" style="background: linear-gradient(135deg, var(--accent-rose) 0%, var(--accent-burgundy) 100%);">
                    <span>🌹</span>
                    <span>قناة التُقَى</span>
                </a>
            </div>

            <button class="btn-secondary" onclick="closeModal('aboutModal')" style="margin-top: 20px;">إغلاق</button>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>