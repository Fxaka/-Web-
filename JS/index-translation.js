$(document).ready(function() {  
    var translations = {  
        'en': {  
            "CAC_welcome": "Explore Technology, Assemble the Future — Welcome to the <strong>Computer Assembly Club</strong>!",  
            "CAC_intro": "Here, members can actively learn, research, and explore new knowledge, technologies, and applications in the field of technology. By personally <strong>assembling computers</strong>, debugging <strong>hardware and software</strong>, they have honed their hands-on and practical abilities, while cultivating a keen insight and creativity for the future development of technology.",  
            "CAC_features-title": "<strong>Key Features</strong> of Our Site:",  
            "CACfeature-1": "Learn to <strong>select computer hardware</strong> that meets one's own needs",  
            "CACfeature-2": "Learn how to <strong>assemble a computer</strong>",  
            "CACfeature-3": "Engage in computer hardware <strong>exchange activities</strong>",  
            "CACfeature-4": "Participate in computer <strong>assembly-related competitions</strong>",  
            "CACfeature-5": "Learn the basics of <strong>computer hardware</strong>"  
        },  
        'zh': {  
            "CAC_welcome": "探索科技，组装未来 —— 欢迎来到<strong>计算机组装俱乐部</strong>！",  
            "CAC_intro": "在这里，成员们可以积极学习、研究和探索科技领域的新知识、新技术和新应用。通过亲手<strong>组装计算机</strong>、调试<strong>硬件和软件</strong>，他们锻炼了自己的动手能力和实践能力，同时培养了对未来科技发展的敏锐洞察力和创造力。",  
            "CAC_features-title": "我们网站的<strong>主要特点</strong>：",  
            "CACfeature-1": "学习选择<strong>符合自己需求的计算机硬件</strong>",  
            "CACfeature-2": "学习如何<strong>组装计算机</strong>",  
            "CACfeature-3": "进行计算机硬件的<strong>交换活动</strong>",  
            "CACfeature-4": "参与计算机<strong>组装的相关竞赛</strong>",  
            "CACfeature-5": "学习<strong>计算机硬件</strong>的基本知识"  
        }  
    };  
  
    var currentLanguage = localStorage.getItem('language') || 'en'; // Default  
    var selectedLanguage = currentLanguage; // Used to track the user's choice of language on the interface (which may be different from the language of the current page)  
    var isLanguageChanged = false; // Used to track if a user has changed the language but hasn't saved it yet  
  
    function applyTranslations(language) {  
        var texts = translations[language];  
        $('#CAC_welcome').html(texts["CAC_welcome"]);  
        $('#CAC_intro').html(texts["CAC_intro"]);  
        $('#CAC_features-title').html(texts["CAC_features-title"]);  
        $('#CACfeature-1').html(texts["CACfeature-1"]);  
        $('#CACfeature-2').html(texts["CACfeature-2"]);  
        $('#CACfeature-3').html(texts["CACfeature-3"]);  
        $('#CACfeature-4').html(texts["CACfeature-4"]);  
        $('#CACfeature-5').html(texts["CACfeature-5"]);  
    
        // Update the text of the Change Language button  
        $('#change-language-button').text(language === 'zh' ? 'EN/Ch - Change Language' : 'EN/Ch - Change Language');  
    
        // Update the selectedLanguage variable to reflect the user's choices on the interface  
        selectedLanguage = language;  
    
        // Check if the language has changed and update the button status  
        updateSaveButtonState();  
    }  

     function updateSaveButtonState() {  
        // If you select a different language than the language of the current app, enable the Save button  
        $('#save-language-button').prop('disabled', selectedLanguage === currentLanguage);  
    }  
  
    // The current language is applied when the page is initialized  
    applyTranslations(currentLanguage);  
  
    // Listen for clicks on the change language button  
    $('#change-language-button').click(function() {  
        var newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';  
        applyTranslations(newLanguage); // Change the language  
        currentLanguage = newLanguage; 
    });  
  
    // Listen for clicks on the Save Language button  
    $('#save-language-button').click(function() {  
        // Save the user's selected language to localStorage  
        localStorage.setItem('language', selectedLanguage);  
        // Update currentLanguage to reflect saved settings  
        currentLanguage = selectedLanguage;  
        // Reset the change flag and disable the save button  
        isLanguageChanged = false; 
        updateSaveButtonState(); // Re-invoke to make sure the button is in the correct state  
  
        // Displays a message to the user telling them that the settings have been saved
        alert('The language settings have been saved!');  
    });  
  
    // Initialize the state of the save button (a different language may have been selected when the page loads)  
    updateSaveButtonState();  
});