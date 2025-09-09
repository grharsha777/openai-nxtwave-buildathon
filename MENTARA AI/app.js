// Application data from the provided JSON
const appData = {
  subjects: [
    {
      id: "math",
      name: "Mathematics",
      icon: "📐",
      topics: [
        {id: "algebra", name: "Algebra", difficulty: "intermediate", progress: 65},
        {id: "calculus", name: "Calculus", difficulty: "advanced", progress: 30},
        {id: "geometry", name: "Geometry", difficulty: "beginner", progress: 85}
      ]
    },
    {
      id: "science",
      name: "Science",
      icon: "🔬",
      topics: [
        {id: "physics", name: "Physics", difficulty: "advanced", progress: 45},
        {id: "chemistry", name: "Chemistry", difficulty: "intermediate", progress: 70},
        {id: "biology", name: "Biology", difficulty: "beginner", progress: 90}
      ]
    },
    {
      id: "history",
      name: "History",
      icon: "📚",
      topics: [
        {id: "world-war", name: "World Wars", difficulty: "intermediate", progress: 55},
        {id: "ancient", name: "Ancient Civilizations", difficulty: "beginner", progress: 75},
        {id: "modern", name: "Modern History", difficulty: "advanced", progress: 25}
      ]
    }
  ],
  user: {
    name: "Student",
    streak: 12,
    totalProgress: 58,
    achievements: ["First Week", "Quiz Master", "Curious Learner"],
    favoriteSubjects: ["math", "science"]
  },
  chatMessages: [
    {id: 1, sender: "mentor", message: "Hello! I'm Mentara, your AI learning companion. What would you like to learn today?", timestamp: "2025-01-01T10:00:00Z"},
    {id: 2, sender: "user", message: "I need help with calculus", timestamp: "2025-01-01T10:01:00Z"},
    {id: 3, sender: "mentor", message: "Great choice! Calculus is the mathematics of change and motion. Let me break it down into simple concepts. Would you like to start with derivatives or integrals?", timestamp: "2025-01-01T10:02:00Z"}
  ],
  calculatorHistory: [
    {expression: "sin(30)", result: "0.5"},
    {expression: "2^3 + 5", result: "13"},
    {expression: "sqrt(16) * 3", result: "12"}
  ]
};

// Global application state
let currentPage = 'dashboard';
let isDarkMode = true;
let chatMessages = [...appData.chatMessages];
let calculatorHistory = [...appData.calculatorHistory];
let currentExpression = '';
let selectedTopic = null;

// DOM elements
let sidebar, mainContent, navLinks, pages, sidebarToggle, themeToggle;
let progressChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Mentara AI...');
    initializeElements();
    setupEventListeners();
    initializeDashboard();
    initializeChat();
    initializeLibrary();
    initializeCalculator();
    initializeGenerator();
    initializeTranslation();
    initializeAIMentor();
    showLoadingAnimation();
});

function initializeElements() {
    sidebar = document.getElementById('sidebar');
    mainContent = document.getElementById('mainContent');
    navLinks = document.querySelectorAll('.nav-link');
    pages = document.querySelectorAll('.page');
    sidebarToggle = document.getElementById('sidebarToggle');
    themeToggle = document.getElementById('themeToggle');
    
    console.log('Found elements:', {
        sidebar: !!sidebar,
        mainContent: !!mainContent,
        navLinks: navLinks.length,
        pages: pages.length
    });
}

function setupEventListeners() {
    // Navigation - Fixed to properly handle page switching
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const page = link.dataset.page;
            console.log(`Navigation clicked: ${page} (link ${index})`);
            if (page) {
                navigateToPage(page);
            }
        });
    });

    // Generic page navigation buttons
    document.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-page')) {
            e.preventDefault();
            const page = e.target.dataset.page;
            console.log(`Generic page navigation to: ${page}`);
            navigateToPage(page);
        }
    });

    // Sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Responsive handling
    window.addEventListener('resize', handleResize);
}

function navigateToPage(pageId) {
    console.log(`Navigating to page: ${pageId}`);
    console.log(`Available pages:`, Array.from(pages).map(p => p.id));
    
    // Update active nav link
    navLinks.forEach(link => {
        const isActive = link.dataset.page === pageId;
        link.classList.toggle('active', isActive);
        console.log(`Nav link ${link.dataset.page}: ${isActive ? 'active' : 'inactive'}`);
    });

    // Show target page and hide others
    let targetPageFound = false;
    pages.forEach(page => {
        const isTarget = page.id === pageId;
        if (isTarget) {
            targetPageFound = true;
            console.log(`Showing page: ${page.id}`);
        }
        page.classList.toggle('active', isTarget);
    });

    if (!targetPageFound) {
        console.error(`Page with id "${pageId}" not found!`);
        // Fallback to dashboard
        const dashboardPage = document.getElementById('dashboard');
        if (dashboardPage) {
            dashboardPage.classList.add('active');
        }
    } else {
        currentPage = pageId;
        console.log(`Successfully navigated to: ${pageId}`);
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 768 && sidebar) {
        sidebar.classList.remove('open');
    }
}

function toggleSidebar() {
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode', !isDarkMode);
    if (themeToggle) {
        themeToggle.textContent = isDarkMode ? '🌙' : '☀️';
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    console.log('Searching for:', query);
    // Implementation for search functionality
}

function handleResize() {
    if (window.innerWidth > 768 && sidebar) {
        sidebar.classList.remove('open');
    }
}

function showLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    
    if (loadingText) {
        loadingText.textContent = 'Initializing Mentara AI...';
    }
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
    
    setTimeout(() => {
        if (loadingText) {
            loadingText.textContent = 'Loading your learning data...';
        }
    }, 1000);
    
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
        showWelcomeMessage();
    }, 2500);
}

function showWelcomeMessage() {
    const mentor = document.getElementById('aiMentor');
    const speechBubble = document.getElementById('speechBubble');
    const speechText = document.getElementById('speechText');
    
    if (speechText) {
        speechText.textContent = `Welcome back, ${appData.user.name}! Ready to continue your learning journey?`;
    }
    if (speechBubble) {
        speechBubble.classList.remove('hidden');
    }
    
    setTimeout(() => {
        if (speechBubble) {
            speechBubble.classList.add('hidden');
        }
    }, 4000);
}

// Dashboard initialization
function initializeDashboard() {
    animateCounters();
    setTimeout(initializeProgressChart, 500); // Delay to ensure DOM is ready
}

function animateCounters() {
    const counters = [
        { element: document.getElementById('streakCounter'), target: appData.user.streak, suffix: '' },
        { element: document.getElementById('progressCounter'), target: appData.user.totalProgress, suffix: '%' },
        { element: document.getElementById('achievementCounter'), target: appData.user.achievements.length, suffix: '' },
        { element: document.getElementById('subjectCounter'), target: appData.subjects.length, suffix: '' }
    ];

    counters.forEach(counter => {
        if (counter.element) {
            animateCounter(counter.element, counter.target, counter.suffix);
        }
    });
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

function initializeProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) {
        console.log('Progress chart canvas not found');
        return;
    }

    const data = appData.subjects.map(subject => {
        const avgProgress = subject.topics.reduce((sum, topic) => sum + topic.progress, 0) / subject.topics.length;
        return Math.round(avgProgress);
    });

    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: appData.subjects.map(s => s.name),
            datasets: [{
                data: data,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f5f5f5',
                        padding: 20
                    }
                }
            }
        }
    });
}

// Chat functionality
function initializeChat() {
    renderChatMessages();
    setupChatInput();
}

function renderChatMessages() {
    const chatContainer = document.getElementById('chatMessages');
    if (!chatContainer) return;

    chatContainer.innerHTML = '';
    
    chatMessages.forEach(message => {
        const messageElement = createMessageElement(message);
        chatContainer.appendChild(messageElement);
    });
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function createMessageElement(message) {
    const div = document.createElement('div');
    div.className = `message ${message.sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = message.sender === 'mentor' ? 'M' : 'S';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = message.message;
    
    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = formatTime(message.timestamp);
    content.appendChild(time);
    
    div.appendChild(avatar);
    div.appendChild(content);
    
    return div;
}

function setupChatInput() {
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const clearChatBtn = document.getElementById('clearChat');

    if (chatInput && chatSendBtn) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        chatSendBtn.addEventListener('click', sendMessage);
    }

    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', clearChat);
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    const userMessage = {
        id: Date.now(),
        sender: 'user',
        message: message,
        timestamp: new Date().toISOString()
    };
    
    chatMessages.push(userMessage);
    chatInput.value = '';
    renderChatMessages();
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's a great question! Let me help you understand this concept better.",
            "I can see you're working hard on this topic. Here's what I suggest...",
            "Excellent thinking! Let me provide some additional insights.",
            "This is a common challenge. Let's break it down step by step.",
            "I'm here to help! Would you like me to explain this in a different way?"
        ];
        
        const aiMessage = {
            id: Date.now() + 1,
            sender: 'mentor',
            message: responses[Math.floor(Math.random() * responses.length)],
            timestamp: new Date().toISOString()
        };
        
        chatMessages.push(aiMessage);
        renderChatMessages();
    }, 1500);
}

function clearChat() {
    chatMessages = [chatMessages[0]]; // Keep the initial greeting
    renderChatMessages();
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Library functionality
function initializeLibrary() {
    renderSubjects();
    setupLibraryFilters();
}

function renderSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    if (!subjectsGrid) return;

    subjectsGrid.innerHTML = '';
    
    appData.subjects.forEach(subject => {
        const subjectCard = createSubjectCard(subject);
        subjectsGrid.appendChild(subjectCard);
    });
}

function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    
    card.innerHTML = `
        <div class="subject-header">
            <div class="subject-icon">${subject.icon}</div>
            <h3 class="subject-title">${subject.name}</h3>
        </div>
        <div class="topics-list">
            ${subject.topics.map(topic => `
                <div class="topic-item" data-subject="${subject.id}" data-topic="${topic.id}">
                    <div class="topic-info">
                        <h4>${topic.name}</h4>
                        <span class="difficulty-badge ${topic.difficulty}">${topic.difficulty}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${topic.progress}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add click handlers for topics
    card.querySelectorAll('.topic-item').forEach(topicElement => {
        topicElement.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const subjectId = topicElement.dataset.subject;
            const topicId = topicElement.dataset.topic;
            console.log(`Topic clicked: ${subjectId} - ${topicId}`);
            selectTopic(subjectId, topicId);
        });
    });
    
    return card;
}

function setupLibraryFilters() {
    const difficultyFilter = document.getElementById('difficultyFilter');
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', filterSubjects);
    }
}

function filterSubjects() {
    const difficulty = document.getElementById('difficultyFilter').value;
    const topicItems = document.querySelectorAll('.topic-item');
    
    topicItems.forEach(item => {
        const badge = item.querySelector('.difficulty-badge');
        const topicDifficulty = badge ? badge.textContent : '';
        if (!difficulty || topicDifficulty === difficulty) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectTopic(subjectId, topicId) {
    const subject = appData.subjects.find(s => s.id === subjectId);
    const topic = subject?.topics.find(t => t.id === topicId);
    
    if (topic) {
        selectedTopic = { subject, topic };
        loadTopicContent(subject, topic);
        navigateToPage('learning');
    }
}

function loadTopicContent(subject, topic) {
    const titleElement = document.getElementById('learningTopicTitle');
    const contentElement = document.getElementById('learningContent');
    
    if (titleElement) {
        titleElement.textContent = `${subject.name} - ${topic.name}`;
    }
    
    if (contentElement) {
        contentElement.innerHTML = `
            <div class="topic-content">
                <div class="topic-header">
                    <h3>${topic.name}</h3>
                    <span class="difficulty-badge ${topic.difficulty}">${topic.difficulty}</span>
                </div>
                <div class="topic-progress">
                    <div class="progress-bar" style="width: 100%; height: 8px;">
                        <div class="progress-fill" style="width: ${topic.progress}%"></div>
                    </div>
                    <span>${topic.progress}% Complete</span>
                </div>
                <div class="topic-description">
                    <p>This is an interactive learning module for ${topic.name}. Here you would find:</p>
                    <ul>
                        <li>🎥 Video explanations and tutorials</li>
                        <li>📝 Interactive exercises and quizzes</li>
                        <li>📖 Reading materials and references</li>
                        <li>💡 Practical examples and applications</li>
                    </ul>
                </div>
                <div class="topic-actions">
                    <button class="btn btn--primary" onclick="startQuiz()">Start Quiz</button>
                    <button class="btn btn--outline" onclick="watchVideo()">Watch Video</button>
                    <button class="btn btn--outline" onclick="readMaterial()">Read Material</button>
                </div>
            </div>
        `;
    }
}

// Calculator functionality
function initializeCalculator() {
    createCalculatorButtons();
    renderCalculatorHistory();
}

function createCalculatorButtons() {
    const buttonsContainer = document.getElementById('calculatorButtons');
    if (!buttonsContainer) return;

    const buttons = [
        ['C', 'CE', '←', '÷', 'π'],
        ['sin', 'cos', 'tan', '×', 'e'],
        ['7', '8', '9', '−', 'ln'],
        ['4', '5', '6', '+', 'log'],
        ['1', '2', '3', '=', 'sqrt'],
        ['±', '0', '.', '=', '^']
    ];

    buttonsContainer.innerHTML = '';
    
    buttons.forEach(row => {
        row.forEach((btn, index) => {
            if (btn === '=' && index === 4) return; // Skip second equals
            const button = document.createElement('button');
            button.className = `calc-btn ${getButtonClass(btn)}`;
            button.textContent = btn;
            button.addEventListener('click', () => handleCalculatorInput(btn));
            buttonsContainer.appendChild(button);
        });
    });

    // Add clear history button functionality
    const clearHistoryBtn = document.getElementById('clearHistory');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            calculatorHistory = [];
            renderCalculatorHistory();
        });
    }
}

function getButtonClass(btn) {
    if (['+', '−', '×', '÷', '='].includes(btn)) return 'operator';
    if (btn === '=') return 'equals';
    return '';
}

function handleCalculatorInput(input) {
    const display = document.getElementById('calcDisplay');
    if (!display) return;

    switch(input) {
        case 'C':
            currentExpression = '';
            display.value = '';
            break;
        case 'CE':
            display.value = '';
            break;
        case '←':
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
            break;
        case '=':
            calculateResult();
            break;
        case '±':
            if (currentExpression && !isNaN(parseFloat(currentExpression))) {
                currentExpression = (parseFloat(currentExpression) * -1).toString();
                display.value = currentExpression;
            }
            break;
        default:
            if (input === 'sin' || input === 'cos' || input === 'tan' || input === 'ln' || input === 'log' || input === 'sqrt') {
                currentExpression += input + '(';
            } else {
                currentExpression += input;
            }
            display.value = currentExpression;
    }
}

function calculateResult() {
    const display = document.getElementById('calcDisplay');
    if (!currentExpression || !display) return;

    try {
        let expression = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
            .replace(/π/g, Math.PI)
            .replace(/e(?!\d)/g, Math.E);

        // Handle functions
        expression = expression
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/\^/g, '**');

        const result = eval(expression);
        const formattedResult = Number.isInteger(result) ? result.toString() : result.toFixed(6);
        
        display.value = formattedResult;
        
        // Add to history
        calculatorHistory.unshift({
            expression: currentExpression,
            result: formattedResult
        });
        
        renderCalculatorHistory();
        currentExpression = formattedResult;
        
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}

function renderCalculatorHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;

    historyList.innerHTML = '';
    
    calculatorHistory.slice(0, 10).forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-expression">${item.expression}</div>
            <div class="history-result">= ${item.result}</div>
        `;
        
        historyItem.addEventListener('click', () => {
            const display = document.getElementById('calcDisplay');
            if (display) {
                display.value = item.result;
                currentExpression = item.result;
            }
        });
        
        historyList.appendChild(historyItem);
    });
}

// Generator functionality
function initializeGenerator() {
    setupGeneratorTabs();
    setupGeneratorForms();
}

function setupGeneratorTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabElement = document.getElementById(targetTab + 'Tab');
            if (tabElement) {
                tabElement.classList.add('active');
            }
        });
    });
}

function setupGeneratorForms() {
    const generateImageBtn = document.getElementById('generateImage');
    const generateVideoBtn = document.getElementById('generateVideo');

    if (generateImageBtn) {
        generateImageBtn.addEventListener('click', generateImage);
    }

    if (generateVideoBtn) {
        generateVideoBtn.addEventListener('click', generateVideo);
    }
}

function generateImage() {
    const prompt = document.getElementById('imagePrompt').value;
    const style = document.getElementById('imageStyle').value;
    const resultsContainer = document.getElementById('imageResults');
    
    if (!prompt.trim()) {
        alert('Please enter a description for the image.');
        return;
    }
    
    showLoadingInContainer(resultsContainer, 'Generating image...');
    
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="generation-result">
                <div class="generation-placeholder">🖼️</div>
                <h4>Image Generated Successfully!</h4>
                <p><strong>Prompt:</strong> ${prompt}</p>
                <p><strong>Style:</strong> ${style}</p>
                <div class="generation-actions">
                    <button class="btn btn--primary">Download</button>
                    <button class="btn btn--outline">Share</button>
                    <button class="btn btn--outline">Regenerate</button>
                </div>
            </div>
        `;
    }, 3000);
}

function generateVideo() {
    const prompt = document.getElementById('videoPrompt').value;
    const duration = document.getElementById('videoDuration').value;
    const resultsContainer = document.getElementById('videoResults');
    
    if (!prompt.trim()) {
        alert('Please enter a description for the video.');
        return;
    }
    
    showLoadingInContainer(resultsContainer, 'Generating video...');
    
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="generation-result">
                <div class="generation-placeholder">🎬</div>
                <h4>Video Generated Successfully!</h4>
                <p><strong>Prompt:</strong> ${prompt}</p>
                <p><strong>Duration:</strong> ${duration} seconds</p>
                <div class="generation-actions">
                    <button class="btn btn--primary">Download</button>
                    <button class="btn btn--outline">Share</button>
                    <button class="btn btn--outline">Preview</button>
                </div>
            </div>
        `;
    }, 5000);
}

function showLoadingInContainer(container, message) {
    container.innerHTML = `
        <div class="generation-loading" style="text-align: center; padding: 40px;">
            <div class="loading-spinner" style="margin: 0 auto 20px auto;"></div>
            <p>${message}</p>
        </div>
    `;
}

// Translation functionality
function initializeTranslation() {
    setupTranslationControls();
}

function setupTranslationControls() {
    const translateBtn = document.getElementById('translateBtn');
    const swapBtn = document.getElementById('swapLanguages');
    const sourceText = document.getElementById('sourceText');

    if (translateBtn) {
        translateBtn.addEventListener('click', translateText);
    }

    if (swapBtn) {
        swapBtn.addEventListener('click', swapLanguages);
    }

    if (sourceText) {
        sourceText.addEventListener('input', debounce(autoTranslate, 1000));
    }
}

function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const sourceLang = document.getElementById('sourceLanguage').value;
    const targetLang = document.getElementById('targetLanguage').value;
    const translatedText = document.getElementById('translatedText');
    
    if (!sourceText.trim()) {
        alert('Please enter text to translate.');
        return;
    }
    
    // Simulate translation
    translatedText.value = 'Translating...';
    
    setTimeout(() => {
        const translations = {
            'en-es': 'Esta es una traducción simulada del texto.',
            'en-fr': 'Ceci est une traduction simulée du texte.',
            'en-de': 'Dies ist eine simulierte Übersetzung des Textes.',
            'es-en': 'This is a simulated translation of the text.',
            'fr-en': 'This is a simulated translation of the text.',
        };
        
        const key = `${sourceLang}-${targetLang}`;
        translatedText.value = translations[key] || 'Translation completed (simulated)';
    }, 1500);
}

function swapLanguages() {
    const sourceLang = document.getElementById('sourceLanguage');
    const targetLang = document.getElementById('targetLanguage');
    const sourceText = document.getElementById('sourceText');
    const translatedText = document.getElementById('translatedText');
    
    if (sourceLang && targetLang && sourceText && translatedText) {
        // Swap language selections
        const tempLang = sourceLang.value;
        sourceLang.value = targetLang.value;
        targetLang.value = tempLang;
        
        // Swap text content
        const tempText = sourceText.value;
        sourceText.value = translatedText.value;
        translatedText.value = tempText;
    }
}

function autoTranslate() {
    const sourceText = document.getElementById('sourceText').value;
    if (sourceText.trim().length > 10) {
        translateText();
    }
}

// AI Mentor functionality
function initializeAIMentor() {
    const mentor = document.getElementById('aiMentor');
    const speechBubble = document.getElementById('speechBubble');
    
    if (mentor) {
        mentor.addEventListener('click', () => {
            toggleSpeechBubble();
        });
    }
    
    // Random mentor interactions
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            showMentorTip();
        }
    }, 30000); // Every 30 seconds
}

function toggleSpeechBubble() {
    const speechBubble = document.getElementById('speechBubble');
    const speechText = document.getElementById('speechText');
    
    if (speechBubble && speechText) {
        if (speechBubble.classList.contains('hidden')) {
            const tips = [
                "💡 Try using the calculator for complex math problems!",
                "🎯 Set a daily learning goal in your profile settings.",
                "📚 Explore new topics in the Content Library.",
                "🤖 Ask me anything in the AI Chat - I'm here to help!",
                "🏆 Keep up your learning streak - you're doing great!",
                "🔍 Use the search feature to find specific topics quickly.",
                "🎨 Generate visual aids with the AI Image Generator!"
            ];
            
            speechText.textContent = tips[Math.floor(Math.random() * tips.length)];
            speechBubble.classList.remove('hidden');
            
            setTimeout(() => {
                speechBubble.classList.add('hidden');
            }, 5000);
        } else {
            speechBubble.classList.add('hidden');
        }
    }
}

function showMentorTip() {
    const speechBubble = document.getElementById('speechBubble');
    if (!speechBubble || !speechBubble.classList.contains('hidden')) return;
    
    toggleSpeechBubble();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Interactive features for learning page
function startQuiz() {
    if (!selectedTopic) return;
    
    showLoadingAnimation();
    setTimeout(() => {
        alert(`Starting quiz for ${selectedTopic.topic.name}!`);
    }, 1500);
}

function watchVideo() {
    if (!selectedTopic) return;
    
    const contentElement = document.getElementById('learningContent');
    if (contentElement) {
        contentElement.innerHTML += `
            <div class="video-player" style="margin-top: 24px; text-align: center;">
                <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 40px; margin: 20px 0;">
                    <div style="font-size: 3rem; margin-bottom: 16px;">📹</div>
                    <h4>Video: ${selectedTopic.topic.name} Explained</h4>
                    <p>Interactive video content would play here</p>
                    <button class="btn btn--primary" onclick="this.parentElement.parentElement.remove()">Close Video</button>
                </div>
            </div>
        `;
    }
}

function readMaterial() {
    if (!selectedTopic) return;
    
    const contentElement = document.getElementById('learningContent');
    if (contentElement) {
        contentElement.innerHTML += `
            <div class="reading-material" style="margin-top: 24px;">
                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin: 20px 0;">
                    <h4>📖 Reading Material: ${selectedTopic.topic.name}</h4>
                    <p>This section would contain comprehensive reading materials, including:</p>
                    <ul>
                        <li>Detailed explanations and theory</li>
                        <li>Real-world applications and examples</li>
                        <li>Historical context and development</li>
                        <li>Practice problems and exercises</li>
                    </ul>
                    <button class="btn btn--outline" onclick="this.parentElement.parentElement.remove()">Close Reading</button>
                </div>
            </div>
        `;
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals/overlays
    if (e.key === 'Escape') {
        const speechBubble = document.getElementById('speechBubble');
        if (speechBubble) {
            speechBubble.classList.add('hidden');
        }
    }
});

// Progressive enhancement and performance
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('App ready for PWA enhancement');
    });
}

// Analytics and user tracking (placeholder)
function trackUserAction(action, data) {
    console.log('User action:', action, data);
}