// Mentara AI - Ultra Futuristic Learning Platform
class MentaraAI {
    constructor() {
        this.currentSection = 'dashboard';
        this.currentTheme = 'cosmic';
        this.chatMessages = [];
        this.isTyping = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.initializeCounters();
        this.loadUserData();
        this.startBackgroundAnimations();
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.getAttribute('data-section');
                this.navigateToSection(section);
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.openThemeModal();
            });
        }

        // Chat functionality
        const sendButton = document.getElementById('sendMessage');
        const chatInput = document.getElementById('chatInput');
        
        if (sendButton) {
            sendButton.addEventListener('click', () => this.sendChatMessage());
        }
        
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendChatMessage();
                }
            });
        }

        // Quick action buttons
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.textContent;
                this.handleQuickAction(action);
            });
        });

        // Code execution
        const runCodeBtn = document.querySelector('.editor-actions .btn');
        if (runCodeBtn && runCodeBtn.textContent.includes('Run')) {
            runCodeBtn.addEventListener('click', () => this.runCode());
        }

        // Theme selection in modal
        document.querySelectorAll('[data-theme]').forEach(themeCard => {
            themeCard.addEventListener('click', (e) => {
                const theme = e.currentTarget.getAttribute('data-theme');
                this.changeTheme(theme);
            });
        });

        // Modal close
        document.querySelectorAll('.modal-close, .modal-overlay').forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target === element) {
                    this.closeModal();
                }
            });
        });

        // Help buttons
        document.querySelectorAll('.help-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleHelpAction(e.target.textContent);
            });
        });

        // Project actions
        document.querySelectorAll('.project-actions .btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleProjectAction(e.target.textContent);
            });
        });

        // Tool cards
        document.querySelectorAll('.tool-card .btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleToolAction(e.target.textContent);
            });
        });

        // Settings toggles
        document.querySelectorAll('.toggle-switch input').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                this.handleSettingChange(e.target);
            });
        });

        // Mobile menu (for responsive)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                const sidebar = document.querySelector('.sidebar');
                if (!sidebar.contains(e.target) && !e.target.closest('.menu-toggle')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    navigateToSection(sectionId) {
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update active section
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        this.currentSection = sectionId;

        // Add entrance animation
        const activeSection = document.getElementById(sectionId);
        activeSection.style.opacity = '0';
        activeSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            activeSection.style.opacity = '1';
            activeSection.style.transform = 'translateY(0)';
            activeSection.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        }, 50);
    }

    openThemeModal() {
        const modal = document.getElementById('themeModal');
        if (modal) {
            modal.classList.remove('hidden');
            // Add entrance animation
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.transform = 'scale(0.8)';
            modalContent.style.opacity = '0';
            
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.opacity = '1';
                modalContent.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            }, 50);
        }
    }

    closeModal() {
        const modal = document.getElementById('themeModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    changeTheme(theme) {
        // Update active theme
        document.querySelectorAll('[data-theme]').forEach(card => {
            card.classList.remove('active');
        });
        document.querySelectorAll(`[data-theme="${theme}"]`).forEach(card => {
            card.classList.add('active');
        });

        this.currentTheme = theme;
        this.showNotification(`Theme changed to ${theme.charAt(0).toUpperCase() + theme.slice(1)}! ✨`);
        this.closeModal();
    }

    sendChatMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;

        // Add user message
        this.addChatMessage('user', message);
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate AI response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateAIResponse(message);
            this.addChatMessage('ai', response);
        }, 1500 + Math.random() * 1000);
    }

    addChatMessage(type, message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'ai' ? '🤖' : '👤';

        const content = document.createElement('div');
        content.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.textContent = message;
        
        const timestamp = document.createElement('span');
        timestamp.className = 'message-time';
        timestamp.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        content.appendChild(messageText);
        content.appendChild(timestamp);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add entrance animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
            messageDiv.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        }, 50);
    }

    showTypingIndicator() {
        this.isTyping = true;
        const chatMessages = document.getElementById('chatMessages');
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    generateAIResponse(userMessage) {
        const responses = {
            'hello': "Hello Alex! I'm excited to help you learn today. What would you like to explore? 🚀",
            'help': "I'm here to assist you with coding, studying, project reviews, or any questions you have. Just ask me anything! 💡",
            'react': "React is fantastic! I can help you understand hooks, components, state management, or walk through any React concepts. What specific area interests you? ⚛️",
            'python': "Python is an amazing language! Whether you need help with basics, data structures, algorithms, or advanced concepts like AI/ML, I'm ready to guide you. 🐍",
            'project': "I'd love to help with your projects! I can review code, suggest improvements, help with debugging, or brainstorm new ideas. What are you working on? 🛠️",
            'quiz': "Let's test your knowledge! I can create personalized quizzes on any topic you're studying. Which subject would you like to be quizzed on? 🧠",
            'code': "I'm excellent at explaining code! You can paste any code snippet and I'll break it down step by step, explain the logic, or help optimize it. 💻",
            'default': [
                "That's a great question! Let me think about the best way to help you with that. 🤔",
                "Interesting! I can definitely assist you with that. Here's what I'd recommend... ✨",
                "I love your curiosity! Learning is all about asking questions. Let me help you understand this better. 📚",
                "Excellent topic to explore! This is actually one of my favorite subjects to discuss. 🌟",
                "Great minds think alike! I was just thinking about this concept. Let me share some insights... 💡"
            ]
        };

        const lowerMessage = userMessage.toLowerCase();
        
        for (let key in responses) {
            if (lowerMessage.includes(key) && key !== 'default') {
                return responses[key];
            }
        }
        
        const defaultResponses = responses.default;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    handleQuickAction(action) {
        const quickResponses = {
            'Explain Code': "I'd be happy to explain any code you have! Just paste your code snippet and I'll break it down step by step. 💻",
            'Generate Quiz': "Let's create a personalized quiz for you! What topic would you like to be tested on? I can make it easy, medium, or expert level. 🧠",
            'Study Plan': "I'll help you create the perfect study plan! What subjects are you focusing on and how much time do you have available? 📅",
            'Debug Help': "I'm your debugging assistant! Share your code and describe the issue you're facing. I'll help you identify and fix the problem. 🐛"
        };

        const response = quickResponses[action] || "I'm ready to help with that! Tell me more about what you need. ✨";
        this.addChatMessage('ai', response);
    }

    runCode() {
        const codeEditor = document.getElementById('codeEditor');
        const outputContent = document.querySelector('.output-content');
        
        if (!codeEditor || !outputContent) return;

        const code = codeEditor.value;
        outputContent.innerHTML = '';

        // Simulate code execution
        this.addOutputLine('> Running code...', 'info');
        
        setTimeout(() => {
            if (code.includes('console.log')) {
                // Simulate console output
                const logMatch = code.match(/console\.log\(['"](.*?)['"]?\)/);
                if (logMatch) {
                    this.addOutputLine(logMatch[1], 'output');
                }
            } else if (code.includes('fibonacci')) {
                this.addOutputLine('55', 'output');
            } else if (code.includes('Hello')) {
                this.addOutputLine('Hello Alex! Ready to code?', 'output');
            } else {
                this.addOutputLine('Code executed successfully!', 'output');
            }
            
            this.addOutputLine('✓ Execution completed', 'success');
        }, 1000);
    }

    addOutputLine(text, type = 'output') {
        const outputContent = document.querySelector('.output-content');
        if (!outputContent) return;

        const line = document.createElement('div');
        line.className = `output-line ${type}`;
        line.textContent = text;
        
        outputContent.appendChild(line);
        outputContent.scrollTop = outputContent.scrollHeight;
    }

    handleHelpAction(action) {
        const helpActions = {
            '💡 Get Study Tips': "Here are some powerful study tips: 1) Use the Pomodoro Technique (25min focus + 5min break), 2) Teach concepts to others, 3) Practice active recall, 4) Create mind maps! 🧠✨",
            '🎯 Set Goals': "Let's set some achievable goals! I recommend: 1) Daily coding practice (30+ min), 2) Complete 1 project per month, 3) Learn 1 new concept weekly. What's your main focus? 🚀",
            '📊 View Progress': "You're doing amazing! You've gained 50 XP today, maintained a 15-day streak, and completed 75% of your React learning path. Keep it up! 📈"
        };

        const response = helpActions[action] || "I'm here to help! What specific assistance do you need? ✨";
        
        // Add to chat if it's open, otherwise show notification
        if (this.currentSection === 'ai-chat') {
            this.addChatMessage('ai', response);
        } else {
            this.showNotification(response);
        }
    }

    handleProjectAction(action) {
        const actions = {
            'Continue': 'Great choice! Opening your project workspace... 🚀',
            'Start': 'Exciting! Let\'s begin this new project adventure! ✨',
            'View': 'Loading project details... 👀',
            'Deploy': 'Preparing for deployment... 🌐',
            'Share': 'Getting share link ready... 📤',
            'Plan': 'Opening project planning tools... 📋'
        };

        this.showNotification(actions[action] || 'Project action initiated! 🎯');
    }

    handleToolAction(action) {
        const tools = {
            'Create Notes': 'Opening AI Note Maker... Upload your lecture and I\'ll create perfect notes! 📝',
            'Generate Cards': 'Flashcard Generator ready! What topic should we turn into flashcards? 🧠',
            'Start Quiz': 'Quiz Arena activated! Choose your difficulty: Easy, Medium, or Expert? 🎯',
            'Plan Study': 'Study Planner loading... I\'ll create your personalized schedule! 📅'
        };

        this.showNotification(tools[action] || 'Tool activated! ⚡');
    }

    handleSettingChange(toggle) {
        const settingName = toggle.closest('.setting-item').querySelector('.setting-name').textContent;
        const isEnabled = toggle.checked;
        
        this.showNotification(
            `${settingName} ${isEnabled ? 'enabled' : 'disabled'}! ${isEnabled ? '✅' : '❌'}`
        );
    }

    initializeCounters() {
        // Animated counters
        this.animateCounter(document.getElementById('streakCounter'), 0, 15, 1000);
        
        // XP Progress animation
        const xpFill = document.querySelector('.xp-fill');
        if (xpFill) {
            setTimeout(() => {
                xpFill.style.width = '94.9%';
            }, 500);
        }

        // Subject progress bars
        document.querySelectorAll('.subject-progress .progress-fill').forEach((bar, index) => {
            setTimeout(() => {
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                    bar.style.transition = 'width 1s cubic-bezier(0.16, 1, 0.3, 1)';
                }, 100);
            }, index * 200);
        });
    }

    animateCounter(element, start, end, duration) {
        if (!element) return;
        
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
                // Add celebration effect for streak
                if (element.id === 'streakCounter') {
                    this.celebrateStreak();
                }
            }
            element.textContent = Math.round(current);
        }, 16);
    }

    celebrateStreak() {
        const streakCard = document.querySelector('.stat-card');
        if (streakCard) {
            streakCard.style.transform = 'scale(1.05)';
            streakCard.style.boxShadow = '0 0 30px rgba(255, 193, 7, 0.6)';
            
            setTimeout(() => {
                streakCard.style.transform = 'scale(1)';
                streakCard.style.boxShadow = '';
                streakCard.style.transition = 'all 0.3s ease';
            }, 600);
        }
    }

    loadUserData() {
        // Simulate loading user achievements with animation
        document.querySelectorAll('.achievement-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
                item.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 200);
        });

        // Load leaderboard with animation
        document.querySelectorAll('.leaderboard-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 150);
        });

        // Animate project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 250);
        });
    }

    startBackgroundAnimations() {
        // Hologram rotation
        const holograms = document.querySelectorAll('.hologram-effect');
        holograms.forEach(hologram => {
            hologram.style.animation = 'hologram-spin 4s linear infinite';
        });

        // Pulsing glow for AI avatars
        const pulsingElements = document.querySelectorAll('.pulsing-glow');
        pulsingElements.forEach(element => {
            element.style.animation = 'pulse-glow 2s ease-in-out infinite';
        });

        // Shimmer effect on XP bars
        const xpBars = document.querySelectorAll('.xp-fill');
        xpBars.forEach(bar => {
            if (bar.style.width !== '0%') {
                bar.classList.add('shimmer-effect');
            }
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
                <span class="notification-message">${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 24px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 16px 20px;
            color: #f5f5f5;
            font-size: 14px;
            max-width: 400px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 3000;
            transform: translateX(100%);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 4 seconds
        const autoRemove = setTimeout(() => {
            this.removeNotification(notification);
        }, 4000);

        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notification);
        });

        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: #f5f5f5;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            margin-left: 12px;
        `;

        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: center;
            gap: 8px;
        `;
    }

    removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }

    // Add mobile menu toggle for responsive design
    toggleMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open');
    }

    // Add special effects for achievements
    unlockAchievement(title, description) {
        const achievementModal = document.createElement('div');
        achievementModal.className = 'achievement-unlock-modal';
        achievementModal.innerHTML = `
            <div class="achievement-unlock-content glass-effect">
                <div class="achievement-unlock-icon">🏆</div>
                <h3>Achievement Unlocked!</h3>
                <h4>${title}</h4>
                <p>${description}</p>
                <div class="achievement-xp">+250 XP</div>
                <button class="btn btn--primary" onclick="this.closest('.achievement-unlock-modal').remove()">
                    Awesome! 🚀
                </button>
            </div>
        `;

        achievementModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 4000;
            backdrop-filter: blur(8px);
        `;

        const content = achievementModal.querySelector('.achievement-unlock-content');
        content.style.cssText = `
            text-align: center;
            padding: 40px;
            max-width: 400px;
            transform: scale(0.8);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        `;

        document.body.appendChild(achievementModal);

        setTimeout(() => {
            content.style.transform = 'scale(1)';
            content.style.opacity = '1';
        }, 100);
    }

    // Simulate daily challenge completion
    completeDailyChallenge() {
        const progressBar = document.querySelector('.challenge-progress .progress-fill');
        const progressText = document.querySelector('.challenge-progress .progress-text');
        
        if (progressBar && progressText) {
            let currentProgress = parseInt(progressText.textContent.split('/')[0]);
            currentProgress = Math.min(currentProgress + 1, 3);
            
            const percentage = (currentProgress / 3) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${currentProgress}/3 Complete`;
            
            if (currentProgress === 3) {
                this.unlockAchievement('Daily Achiever', 'Completed today\'s challenge!');
                this.showNotification('Daily challenge completed! 🎉 +150 XP earned!', 'success');
            } else {
                this.showNotification(`Challenge progress: ${currentProgress}/3 tasks completed! 💪`, 'success');
            }
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MentaraAI();
    
    // Make app globally available for debugging
    window.mentaraAI = app;
    
    // Welcome message
    setTimeout(() => {
        app.showNotification('Welcome to Mentara AI! Your futuristic learning journey begins now! 🚀✨', 'success');
    }, 1000);

    // Add some interactive demo features
    setTimeout(() => {
        if (app.currentSection === 'dashboard') {
            // Simulate some activity
            setTimeout(() => {
                app.completeDailyChallenge();
            }, 5000);
        }
    }, 3000);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case '1':
                e.preventDefault();
                window.mentaraAI?.navigateToSection('dashboard');
                break;
            case '2':
                e.preventDefault();
                window.mentaraAI?.navigateToSection('ai-chat');
                break;
            case '3':
                e.preventDefault();
                window.mentaraAI?.navigateToSection('study-tools');
                break;
            case '4':
                e.preventDefault();
                window.mentaraAI?.navigateToSection('code-lab');
                break;
            case '/':
                e.preventDefault();
                document.getElementById('chatInput')?.focus();
                break;
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        window.mentaraAI?.closeModal();
    }
});

// Add window resize handler for responsive design
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        const sidebar = document.querySelector('.sidebar');
        sidebar?.classList.remove('open');
    }
});

// Intersection Observer for scroll animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.card, .tool-card, .project-card').forEach(el => {
        observer.observe(el);
    });
};

// Initialize scroll animations after DOM load
document.addEventListener('DOMContentLoaded', observeElements);

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);