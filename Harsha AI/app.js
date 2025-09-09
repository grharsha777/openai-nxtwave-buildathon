// Harsha AI Application JavaScript

// Application Data
const appData = {
  platformStats: {
    totalUsers: "8.5M",
    domainsActive: 6,
    languagesSupported: 22,
    ruralReach: "65%",
    successStories: 1247
  },
  domains: [
    {
      id: "healthcare",
      name: "Healthcare Support",
      icon: "🏥",
      description: "AI doctor guidance, mental health support, emergency triage",
      users: "500K+",
      impact: "85%",
      languages: 15,
      features: ["AI Doctor Chat", "Mental Health Companion", "Emergency Triage", "Facility Locator"]
    },
    {
      id: "education",
      name: "Educational Excellence",
      icon: "📚",
      description: "AI tutoring, skill mapping, regional language learning",
      users: "7M+",
      impact: "78%",
      languages: 22,
      features: ["AI Tutor", "Interactive Quizzes", "Skill Mapping", "Progress Tracking"]
    },
    {
      id: "agriculture",
      name: "Agriculture & Climate",
      icon: "🌾",
      description: "Smart farming, weather prediction, sustainability tracking",
      users: "500K+",
      impact: "92%",
      languages: 18,
      features: ["Crop Guidance", "Weather Alerts", "Pest Detection", "Sustainability Tips"]
    },
    {
      id: "climate",
      name: "Climate & Sustainability",
      icon: "🌍",
      description: "Waste management, recycling solutions, eco-friendly actions",
      users: "250K+",
      impact: "75%",
      languages: 12,
      features: ["Waste Management", "Recycling Guide", "Carbon Tracking", "Green Actions"]
    },
    {
      id: "accessibility",
      name: "Accessibility & Inclusion",
      icon: "♿",
      description: "Voice-first interfaces, sign language, senior support",
      users: "44K+",
      impact: "88%",
      languages: 14,
      features: ["Voice Assistant", "Sign Translation", "Senior Companion", "Job Matching"]
    },
    {
      id: "truth",
      name: "Truth & Trust",
      icon: "✅",
      description: "Fact-checking, misinformation detection, source verification",
      users: "1.2M+",
      impact: "70%",
      languages: 22,
      features: ["Fact Checker", "Source Verification", "News Analysis", "Misinformation Alert"]
    }
  ],
  languages: [
    {code: "en", name: "English", native: "English"},
    {code: "hi", name: "Hindi", native: "हिंदी"},
    {code: "ta", name: "Tamil", native: "தமிழ்"},
    {code: "te", name: "Telugu", native: "తెలుగు"},
    {code: "kn", name: "Kannada", native: "ಕನ್ನಡ"},
    {code: "ml", name: "Malayalam", native: "മലയാളം"},
    {code: "bn", name: "Bengali", native: "বাংলা"},
    {code: "gu", name: "Gujarati", native: "ગુજરાતી"},
    {code: "mr", name: "Marathi", native: "मराठी"},
    {code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ"}
  ],
  successStories: [
    {
      domain: "healthcare",
      title: "Rural Doctor Transformed Patient Care",
      description: "Dr. Rajesh from Khammam district now diagnoses conditions 40% faster using AI assistance",
      impact: "500+ patients helped monthly",
      location: "Telangana"
    },
    {
      domain: "education",
      title: "Student Achieves Engineering Dream",
      description: "Priya from rural Karnataka cleared JEE with AI tutor support in Kannada",
      impact: "98th percentile score",
      location: "Karnataka"
    },
    {
      domain: "agriculture",
      title: "Farmer Doubles Income with AI",
      description: "Raman from Punjab increased crop yield by 40% using AI farming guidance",
      impact: "₹2.5L additional annual income",
      location: "Punjab"
    }
  ],
  realTimeData: {
    activeUsers: 125420,
    aiInteractions: 2847392,
    languageQueries: 156743,
    emergencyAlerts: 234,
    factChecksToday: 8765,
    farmerQueries: 12456
  }
};

// Translation data
const translations = {
  en: {
    heroTitle: "Empowering India's Digital Evolution",
    heroSubtitle: "India's most comprehensive GenAI platform serving millions across 22 languages and 6 critical domains",
    getStarted: "Get Started",
    exploreDemos: "Explore Demos",
    totalUsers: "Total Users",
    domainsActive: "Active Domains",
    languages: "Languages",
    ruralReach: "Rural Reach",
    ourDomains: "Our Domains",
    backToDomains: "Back to Domains",
    realtimeDashboard: "Real-time Dashboard",
    activeUsers: "Active Users",
    aiInteractions: "AI Interactions",
    emergencyAlerts: "Emergency Alerts",
    domainUsage: "Domain Usage Distribution",
    languageDistribution: "Language Distribution",
    successStories: "Success Stories",
    adminDashboard: "Admin Dashboard",
    userManagement: "User Management",
    systemHealth: "System Health",
    chatWelcome: "Hello! How can I help you today?",
    send: "Send",
    voice: "Voice",
    accessibilitySettings: "Accessibility Settings",
    fontSize: "Font Size",
    contrast: "High Contrast",
    voiceAssist: "Voice Assistant",
    toggle: "Toggle",
    enable: "Enable",
    close: "Close",
    home: "Home",
    domains: "Domains",
    dashboard: "Dashboard",
    stories: "Stories",
    admin: "Admin",
    loading: "Loading..."
  },
  hi: {
    heroTitle: "भारत के डिजिटल विकास को सशक्त बनाना",
    heroSubtitle: "भारत का सबसे व्यापक GenAI प्लेटफॉर्म जो 22 भाषाओं और 6 महत्वपूर्ण क्षेत्रों में लाखों लोगों की सेवा कर रहा है",
    getStarted: "शुरू करें",
    exploreDemos: "डेमो देखें",
    totalUsers: "कुल उपयोगकर्ता",
    domainsActive: "सक्रिय क्षेत्र",
    languages: "भाषाएं",
    ruralReach: "ग्रामीण पहुंच",
    ourDomains: "हमारे क्षेत्र",
    backToDomains: "क्षेत्रों पर वापस",
    realtimeDashboard: "रियल-टाइम डैशबोर्ड",
    activeUsers: "सक्रिय उपयोगकर्ता",
    aiInteractions: "AI इंटरैक्शन",
    emergencyAlerts: "आपातकालीन अलर्ट",
    domainUsage: "डोमेन उपयोग वितरण",
    languageDistribution: "भाषा वितरण",
    successStories: "सफलता की कहानियां",
    adminDashboard: "एडमिन डैशबोर्ड",
    userManagement: "उपयोगकर्ता प्रबंधन",
    systemHealth: "सिस्टम स्वास्थ्य",
    chatWelcome: "नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूं?",
    send: "भेजें",
    voice: "आवाज",
    accessibilitySettings: "पहुंच सेटिंग्स",
    fontSize: "फॉन्ट साइज़",
    contrast: "उच्च कंट्रास्ट",
    voiceAssist: "आवाज सहायक",
    toggle: "टॉगल",
    enable: "सक्षम करें",
    close: "बंद करें",
    home: "होम",
    domains: "क्षेत्र",
    dashboard: "डैशबोर्ड",
    stories: "कहानियां",
    admin: "एडमिन",
    loading: "लोड हो रहा है..."
  }
};

// Application State
let currentSection = 'landing';
let currentLanguage = 'en';
let currentDomain = null;
let isVoiceActive = false;
let isDarkMode = false;
let isHighContrast = false;
let charts = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Harsha AI application...');
  initializeApp();
  setupEventListeners();
  renderDomains();
  renderStories();
  updateRealTimeMetrics();
  
  // Initialize charts after a short delay to ensure DOM is ready
  setTimeout(() => {
    initializeCharts();
  }, 100);
  
  // Check online/offline status
  updateOnlineStatus();
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

function initializeApp() {
  console.log('App initialization started...');
  
  // Set initial theme based on user preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode = true;
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) themeIcon.textContent = '☀️';
  }
  
  // Initialize accessibility features
  const savedFontSize = 'normal'; // Don't use localStorage for sandbox environment
  setFontSize(savedFontSize);
  const fontSizeSelect = document.getElementById('fontSizeSelect');
  if (fontSizeSelect) fontSizeSelect.value = savedFontSize;
  
  // Translate initial content
  translateContent();
  
  // Show initial section
  showSection('landing');
  
  showNotification('Welcome to Harsha AI Platform!', 'success');
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Language selector
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
  
  // Voice button
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', toggleVoice);
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Accessibility button
  const accessibilityBtn = document.getElementById('accessibilityBtn');
  if (accessibilityBtn) {
    accessibilityBtn.addEventListener('click', toggleAccessibilityPanel);
  }
  
  // Chat functionality
  const sendBtn = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const voiceChatBtn = document.getElementById('voiceChatBtn');
  
  if (sendBtn) sendBtn.addEventListener('click', sendChatMessage);
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }
  if (voiceChatBtn) voiceChatBtn.addEventListener('click', toggleVoiceChat);
  
  // Accessibility controls
  const fontSizeSelect = document.getElementById('fontSizeSelect');
  const contrastToggle = document.getElementById('contrastToggle');
  const voiceAssistToggle = document.getElementById('voiceAssistToggle');
  
  if (fontSizeSelect) {
    fontSizeSelect.addEventListener('change', (e) => {
      setFontSize(e.target.value);
    });
  }
  if (contrastToggle) contrastToggle.addEventListener('click', toggleHighContrast);
  if (voiceAssistToggle) voiceAssistToggle.addEventListener('click', toggleVoiceAssist);
  
  console.log('Event listeners setup complete');
}

// Navigation Functions
function showSection(sectionName, domainId = null) {
  console.log(`Navigating to section: ${sectionName}`, domainId);
  
  showLoading();
  
  setTimeout(() => {
    try {
      // Hide all sections
      const allSections = document.querySelectorAll('.section, .hero');
      allSections.forEach(section => {
        section.classList.add('hidden');
      });
      
      // Show selected section
      let targetSection;
      if (sectionName === 'landing') {
        targetSection = document.getElementById('landing');
      } else {
        targetSection = document.getElementById(sectionName);
      }
      
      if (targetSection) {
        targetSection.classList.remove('hidden');
        console.log(`Showing section: ${sectionName}`);
      } else {
        console.error(`Section not found: ${sectionName}`);
      }
      
      // Handle domain detail view
      if (sectionName === 'domainDetail' && domainId) {
        renderDomainDetail(domainId);
        currentDomain = domainId;
      }
      
      // Update navigation
      updateNavigation(sectionName);
      currentSection = sectionName;
      
      // Reinitialize charts if dashboard is shown
      if (sectionName === 'dashboard') {
        setTimeout(initializeCharts, 100);
      }
      
    } catch (error) {
      console.error('Error in showSection:', error);
    } finally {
      hideLoading();
    }
  }, 300);
}

function updateNavigation(activeSection) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Map sections to navigation items
  const sectionMap = {
    'landing': 'home',
    'domains': 'domains',
    'dashboard': 'dashboard',
    'stories': 'stories',
    'admin': 'admin'
  };
  
  const mappedSection = sectionMap[activeSection] || activeSection;
  const activeNavItem = document.querySelector(`[onclick*="'${mappedSection}'"]`) || 
                       document.querySelector(`[onclick*="'${activeSection}'"]`);
  
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
}

// Domain Functions
function renderDomains() {
  console.log('Rendering domains...');
  const grid = document.getElementById('domainsGrid');
  if (!grid) {
    console.error('Domains grid not found');
    return;
  }
  
  grid.innerHTML = '';
  
  appData.domains.forEach(domain => {
    const domainCard = createDomainCard(domain);
    grid.appendChild(domainCard);
  });
  
  console.log(`Rendered ${appData.domains.length} domain cards`);
}

function createDomainCard(domain) {
  const card = document.createElement('div');
  card.className = 'domain-card';
  card.style.cursor = 'pointer';
  card.onclick = () => {
    console.log(`Domain card clicked: ${domain.id}`);
    showSection('domainDetail', domain.id);
  };
  
  card.innerHTML = `
    <div class="domain-card__header">
      <div class="domain-card__icon">${domain.icon}</div>
      <h3 class="domain-card__title">${domain.name}</h3>
      <p class="domain-card__description">${domain.description}</p>
    </div>
    <div class="domain-card__body">
      <div class="domain-stats">
        <div class="domain-stat">
          <div class="domain-stat__value">${domain.users}</div>
          <div class="domain-stat__label">Users</div>
        </div>
        <div class="domain-stat">
          <div class="domain-stat__value">${domain.impact}</div>
          <div class="domain-stat__label">Impact</div>
        </div>
        <div class="domain-stat">
          <div class="domain-stat__value">${domain.languages}</div>
          <div class="domain-stat__label">Languages</div>
        </div>
      </div>
      <div class="features-list">
        ${domain.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
    </div>
  `;
  
  return card;
}

function renderDomainDetail(domainId) {
  console.log(`Rendering domain detail for: ${domainId}`);
  const domain = appData.domains.find(d => d.id === domainId);
  if (!domain) {
    console.error(`Domain not found: ${domainId}`);
    return;
  }
  
  const content = document.getElementById('domainDetailContent');
  if (!content) {
    console.error('Domain detail content container not found');
    return;
  }
  
  content.innerHTML = `
    <div class="domain-detail">
      <div class="domain-detail__header">
        <div class="domain-detail__icon">${domain.icon}</div>
        <h2 class="domain-detail__title">${domain.name}</h2>
        <p class="domain-detail__description">${domain.description}</p>
      </div>
      
      <div class="domain-features">
        ${domain.features.map(feature => createFeatureCard(feature, domain.id)).join('')}
      </div>
      
      <div class="demo-section">
        <h3>Interactive Demo</h3>
        <p>Experience ${domain.name} capabilities:</p>
        <div class="demo-actions" style="display: flex; gap: 16px; margin-top: 16px;">
          <button class="btn btn--primary" onclick="openChatModal('${domain.name}')">
            Start AI Chat
          </button>
          <button class="btn btn--secondary" onclick="simulateVoiceInteraction('${domain.name}')">
            🎤 Voice Interaction
          </button>
        </div>
      </div>
    </div>
  `;
}

function createFeatureCard(feature, domainId) {
  return `
    <div class="feature-card">
      <div class="feature-card__header">
        <h4 class="feature-card__title">${feature}</h4>
      </div>
      <div class="feature-card__body">
        <p>Advanced AI-powered ${feature.toLowerCase()} designed specifically for Indian context and needs.</p>
        <button class="btn btn--outline btn--sm" onclick="openFeatureDemo('${feature}', '${domainId}')">
          Try Demo
        </button>
      </div>
    </div>
  `;
}

// Stories Functions
function renderStories() {
  console.log('Rendering stories...');
  const grid = document.getElementById('storiesGrid');
  if (!grid) {
    console.error('Stories grid not found');
    return;
  }
  
  grid.innerHTML = '';
  
  appData.successStories.forEach(story => {
    const storyCard = createStoryCard(story);
    grid.appendChild(storyCard);
  });
  
  console.log(`Rendered ${appData.successStories.length} story cards`);
}

function createStoryCard(story) {
  const card = document.createElement('div');
  card.className = 'story-card';
  
  card.innerHTML = `
    <div class="story-card__header">
      <h3 class="story-card__title">${story.title}</h3>
      <p class="story-card__location">📍 ${story.location}</p>
    </div>
    <div class="story-card__body">
      <p class="story-card__description">${story.description}</p>
      <div class="story-card__impact">${story.impact}</div>
    </div>
  `;
  
  return card;
}

// Chat Functions
function openChatModal(title = 'AI Assistant') {
  console.log(`Opening chat modal: ${title}`);
  const chatModal = document.getElementById('chatModal');
  const chatTitle = document.getElementById('chatTitle');
  const chatInput = document.getElementById('chatInput');
  
  if (chatTitle) chatTitle.textContent = title;
  if (chatModal) chatModal.classList.remove('hidden');
  if (chatInput) chatInput.focus();
}

function closeChatModal() {
  const chatModal = document.getElementById('chatModal');
  if (chatModal) chatModal.classList.add('hidden');
}

function sendChatMessage() {
  const chatInput = document.getElementById('chatInput');
  if (!chatInput) return;
  
  const message = chatInput.value.trim();
  if (!message) return;
  
  // Add user message
  addChatMessage(message, 'user');
  chatInput.value = '';
  
  // Simulate AI response
  setTimeout(() => {
    const responses = [
      "I understand your query. Let me help you with that.",
      "Based on your location and language preference, here's what I recommend:",
      "I've analyzed your request. Here are the best options available:",
      "Let me connect you with the relevant resources in your area.",
      "I can help you with that. Would you like me to provide more specific guidance?"
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    addChatMessage(response, 'bot');
  }, 1000);
}

function addChatMessage(message, type) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Voice Functions
function toggleVoice() {
  isVoiceActive = !isVoiceActive;
  const voiceIcon = document.getElementById('voiceIcon');
  const voiceBtn = document.getElementById('voiceBtn');
  
  if (isVoiceActive) {
    if (voiceIcon) voiceIcon.textContent = '🎙️';
    if (voiceBtn) voiceBtn.classList.add('active');
    showNotification('Voice mode activated', 'success');
    simulateSpeechRecognition();
  } else {
    if (voiceIcon) voiceIcon.textContent = '🎤';
    if (voiceBtn) voiceBtn.classList.remove('active');
    showNotification('Voice mode deactivated', 'info');
  }
}

function simulateSpeechRecognition() {
  if (isVoiceActive) {
    setTimeout(() => {
      const commands = [
        'Show me healthcare options',
        'What educational resources are available?',
        'Help me with farming guidance',
        'Check facts about recent news',
        'Find accessibility tools'
      ];
      const command = commands[Math.floor(Math.random() * commands.length)];
      showNotification(`Voice command: "${command}"`, 'info');
    }, 2000);
  }
}

function toggleVoiceChat() {
  showNotification('Voice chat simulation started', 'success');
  setTimeout(() => {
    addChatMessage("I'm listening... (Voice simulation)", 'bot');
  }, 500);
}

function simulateVoiceInteraction(domainName) {
  showNotification(`Voice interaction with ${domainName} started`, 'success');
  setTimeout(() => {
    showNotification('Voice: "How can I help you today?"', 'info');
  }, 1000);
}

// Language Functions
function changeLanguage(langCode) {
  currentLanguage = langCode;
  translateContent();
  const selectedLang = appData.languages.find(l => l.code === langCode);
  showNotification(`Language changed to ${selectedLang?.name || langCode}`, 'success');
}

function translateContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[currentLanguage]?.[key] || translations.en[key];
    if (translation) {
      element.textContent = translation;
    }
  });
}

// Theme Functions
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeIcon = document.getElementById('themeIcon');
  
  if (isDarkMode) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    if (themeIcon) themeIcon.textContent = '🌙';
  }
  
  showNotification(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`, 'success');
}

// Accessibility Functions
function toggleAccessibilityPanel() {
  const panel = document.getElementById('accessibilityPanel');
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function closeAccessibilityPanel() {
  const panel = document.getElementById('accessibilityPanel');
  if (panel) {
    panel.classList.add('hidden');
  }
}

function setFontSize(size) {
  document.body.className = document.body.className.replace(/font-\w+/g, '');
  if (size !== 'normal') {
    document.body.classList.add(`font-${size}`);
  }
}

function toggleHighContrast() {
  isHighContrast = !isHighContrast;
  document.body.classList.toggle('high-contrast');
  showNotification(`High contrast ${isHighContrast ? 'enabled' : 'disabled'}`, 'success');
}

function toggleVoiceAssist() {
  showNotification('Voice assist feature simulated', 'success');
}

// Real-time Data Functions
function updateRealTimeMetrics() {
  const activeUsersMetric = document.getElementById('activeUsersMetric');
  const aiInteractionsMetric = document.getElementById('aiInteractionsMetric');
  const emergencyAlertsMetric = document.getElementById('emergencyAlertsMetric');
  
  setInterval(() => {
    // Simulate real-time updates
    appData.realTimeData.activeUsers += Math.floor(Math.random() * 100) - 50;
    appData.realTimeData.aiInteractions += Math.floor(Math.random() * 1000);
    appData.realTimeData.emergencyAlerts += Math.floor(Math.random() * 5) - 2;
    
    // Update display
    if (activeUsersMetric) {
      activeUsersMetric.textContent = appData.realTimeData.activeUsers.toLocaleString();
    }
    if (aiInteractionsMetric) {
      aiInteractionsMetric.textContent = appData.realTimeData.aiInteractions.toLocaleString();
    }
    if (emergencyAlertsMetric) {
      emergencyAlertsMetric.textContent = Math.max(0, appData.realTimeData.emergencyAlerts).toString();
    }
  }, 5000);
}

// Chart Functions
function initializeCharts() {
  console.log('Initializing charts...');
  
  // Domain usage chart
  const domainCtx = document.getElementById('domainChart');
  if (domainCtx) {
    try {
      // Destroy existing chart if it exists
      if (charts.domain) {
        charts.domain.destroy();
      }
      
      charts.domain = new Chart(domainCtx, {
        type: 'doughnut',
        data: {
          labels: appData.domains.map(d => d.name),
          datasets: [{
            data: appData.domains.map(d => parseInt(d.users.replace(/[^0-9]/g, '')) || 1),
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
      console.log('Domain chart initialized');
    } catch (error) {
      console.error('Error initializing domain chart:', error);
    }
  }
  
  // Language distribution chart
  const languageCtx = document.getElementById('languageChart');
  if (languageCtx) {
    try {
      // Destroy existing chart if it exists
      if (charts.language) {
        charts.language.destroy();
      }
      
      const languageData = [35, 25, 12, 8, 6, 5, 4, 3, 2];
      charts.language = new Chart(languageCtx, {
        type: 'bar',
        data: {
          labels: appData.languages.slice(0, 9).map(l => l.name),
          datasets: [{
            label: 'Usage %',
            data: languageData,
            backgroundColor: '#1FB8CD',
            borderColor: '#1d7b86',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 40
            }
          }
        }
      });
      console.log('Language chart initialized');
    } catch (error) {
      console.error('Error initializing language chart:', error);
    }
  }
}

// Utility Functions
function showLoading() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.classList.remove('hidden');
  }
}

function hideLoading() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
  }
}

function showNotification(message, type = 'info') {
  const notificationContainer = document.getElementById('notificationContainer');
  if (!notificationContainer) return;
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  notificationContainer.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

function updateOnlineStatus() {
  const isOnline = navigator.onLine;
  const offlineIndicator = document.getElementById('offlineIndicator');
  if (offlineIndicator) {
    if (isOnline) {
      offlineIndicator.classList.add('hidden');
    } else {
      offlineIndicator.classList.remove('hidden');
    }
  }
}

function openFeatureDemo(feature, domainId) {
  showNotification(`Opening ${feature} demo for ${domainId} domain`, 'success');
  openChatModal(`${feature} Demo`);
  
  setTimeout(() => {
    addChatMessage(`Welcome to the ${feature} demo! This is a simulated environment.`, 'bot');
  }, 500);
}

// Export functions for global access
window.showSection = showSection;
window.openChatModal = openChatModal;
window.closeChatModal = closeChatModal;
window.closeAccessibilityPanel = closeAccessibilityPanel;
window.simulateVoiceInteraction = simulateVoiceInteraction;
window.openFeatureDemo = openFeatureDemo;