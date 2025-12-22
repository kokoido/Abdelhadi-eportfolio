let whole_information = {
  aboutme: "Hey! I'm Abdelhadi, an aspiring DevSecOps and Cybersecurity Engineer heading to uni next year. I love working with network security, system monitoring, and building secure apps. Right now I'm working on personal projects and going for my CompTIA Network+ cert.",
  skills: "Python, JavaScript, VB.NET, SQL, HTML, CSS, Linux (Kali, Ubuntu), CLI, Cisco Networking, Network Analysis, System Monitoring, Basic Troubleshooting, Git, Cybersecurity Fundamentals",
  projects: "Black-Jack Game (JavaScript) - Fun interactive blackjack game I built with full game logic and a clean UI | Password Manager (Python) - Secure app for storing passwords with encryption | Personal E-Portfolio - My terminal-style portfolio site showing off my projects",
  socials: "GitHub: github.com/kokoido, LinkedIn: linkedin.com/in/abdelhadi-harchich-816098263, Instagram: instagram.com/abdelhadi_harchich, Email: hadiharchich@gmail.com",
  employment: "Safety Steward at Amity Security (Apr 2025 to Present) - Keeping crowds safe, handling emergencies, and making sure events run smoothly | Clothing Shop Assistant at Habous Market (Apr 2022 to Sep 2022) - Helped customers, managed stock, and handled sales",
  education: "BTEC National Extended Diploma in Computing, West Thames College (2023-2025) - Triple Distinction* | GCSE English & Maths (2022-2024) - Grade 5 | Level 2 Gateway ICT (2022-2023) - Pass | Certifications: Cisco Network Basics, Intro to Cybersecurity, SoloLearn Python Developer, CompTIA A+ (In Progress)",
  achievements: "Computing and ICT Student of the Year, Cross College Award at West Thames College, Python Hackathon at Accenture London",
  cv: `CV - ABDELHADI HARCHICH
Location: Hampton, London TW12 | Phone: +447476887276 | Email: hadiharchich@gmail.com
GitHub: github.com/kokoido | LinkedIn: linkedin.com/in/abdelhadi-harchich-816098263`
};


const secretLink = "aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ=="; // Base64 encoded rickroll link

const ascii_art = `
 @@                                     @@ 
   @@@@@-                         =@@@@@   
     @@@@@@@.                 ~@@@@@@@"    
      @@@@@@@=     :   -     -@@@@@@@      
       @@@@@@@@    @@ @@    @@@@@@@@       
        @@@@@@@@   @@@@@   @@@@@@@@        
        @@@@@@@@@@@@@@@@@@@@@@@@@@@        
             .@@@@@@@@@@@@@@@~             
                @@@@@@@@@@@                
                  @@@@@@@                  
                    @@@  sandman               
                     @                     

    ╔═══════════════════════════════════╗
    ║     ~ ABDELHADI HARCHICH ~        ║
    ║        Portfolio Terminal         ║
    ╚═══════════════════════════════════╝           
`;

function autoScroll() {
    const display = document.getElementById("terminal-window");
    if (display) {
        display.scrollTop = display.scrollHeight;
    }
}

function displayInformation(section) {
    const display = document.getElementById("terminal-window");
    const info = whole_information[section];
    if (display) {
        display.innerText = info;
    }
}

function clearDisplay() {
    const display = document.getElementById("terminal-window");
    if (display) {
        display.innerText = ascii_art;
        display.innerText += "Welcome to my portfolio! Type 'help' if you need guidance.";
    }
}

function showHelp() {
    const display = document.getElementById("terminal-window");
    const helpText = `
Available commands:
  aboutme       What I'm passionate about
  skills        My technical skills
  projects      Projects I've built
  socials       Connect with me online
  employment    My work experience
  education     My educational background
  cv            Download my CV as PDF
  ls -a         Find hidden files
  clear         Clear the screen
  help          Show this message
`;
    if (display) {
        display.innerText += helpText;
    }
}

function main(command) {
    const display = document.getElementById("terminal-window");
    if (!display) return;
    
    const trimmedCommand = command.trim();
    display.innerText += "user@portfolio:~$ " + trimmedCommand + "\n";
    
    switch(trimmedCommand) {
        case "aboutme":
        case "skills":
        case "projects":
        case "socials":
        case "employment":
        case "education":
            displayInformation(command);
            break;
        case "cv":
            display.innerText += "Downloading CV...\n";
            const link = document.createElement('a');
            link.href = 'Abdelhadi-Harchich Resume.pdf';
            link.download = 'Abdelhadi-Harchich Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            display.innerText += "CV downloaded successfully!\n";
            break;
        case "ls -a":
            display.innerText += "Hidden file found: top_secret.txt\n";
            break;
        case "clear":
            clearDisplay();
            break;
        case "cat top_secret.txt":
            const rickrollUrl = atob(secretLink);
            display.innerText += "Decrypting secret file...\n";
            display.innerText += "Access granted. Opening link...\n";
            display.innerText += rickrollUrl + "\n";
            display.innerText += "\nYou got rickrolled!\n";
            setTimeout(() => {
                window.open(rickrollUrl, '_blank');
            }, 500);
            break;
        case "help":
            showHelp();
            break;
        default:
            display.innerText += "Command not found. Try 'help' for available commands.\n";
            break;
    }
    autoScroll();
}

// Setup event listeners
function setupEventListeners() {
    const btn = document.getElementById("top-secret.txt");
    const cvBtn = document.getElementById("cv-file");
    const input = document.getElementById("terminal-input");
    
    if (btn) {
        btn.addEventListener("click", function() {
            btn.style.display = "none";
            alert("Oops! You don't have permission to open this file. Try using the 'ls -a' command in the terminal to find it!");
        });
    }
    
    if (cvBtn) {
        cvBtn.addEventListener("click", function() {
            window.open('Abdelhadi-Harchich Resume.pdf', '_blank');
        });
    }
    
    if (input) {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                main(input.value);
                input.value = "";
                setTimeout(autoScroll, 0);
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
        setupEventListeners();
        clearDisplay();
    });
} else {
    setupEventListeners();
    clearDisplay();
}
