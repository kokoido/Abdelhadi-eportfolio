let whole_information = {
  aboutme: "Hello! I'm a passionate developer exploring web technologies and cybersecurity. I love building interactive projects and learning new programming skills.",
  skills: "JavaScript, Python, HTML, CSS, Git, Basic Cybersecurity Concepts",
  projects: "2048 Puzzle Game, Blackjack Game, Drone Control Project, Terminal-Style Portfolio",
  socials: "GitHub: github.com/username, LinkedIn: linkedin.com/in/username, Twitter: twitter.com/username",
  employment: "Junior Developer (Feb 2023 to Jun 2023) at Tech Corp, Merchandiser (May 2022 to Sep 2022) at Habous Clothing Shop",
  education: "Level 3 BTEC Computing, West Thames College (2023 to 2025), Level 2 Gateway ICT, West Thames College (2022 to 2023)",
  cv: "CV - ABDELHADI HARCHICH\n\nEDUCATION:\n- Level 3 BTEC Computing, West Thames College (2023-2025)\n- Level 2 Gateway ICT, West Thames College (2022-2023)\n\nEXPERIENCE:\n- Junior Developer at Tech Corp (Feb 2023 - Jun 2023)\n- Merchandiser at Habous Clothing Shop (May 2022 - Sep 2022)\n\nSKILLS:\n- Web Development: JavaScript, HTML, CSS\n- Programming: Python, JavaScript\n- Version Control: Git\n- Cybersecurity: Basic Concepts\n\nPROJECTS:\n- 2048 Puzzle Game\n- Blackjack Game\n- Drone Control Project\n- Terminal-Style Portfolio\n\nFor more info, use: aboutme, skills, projects, employment, education"
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
        display.innerText += "Welcome to my portfolio! Type 'help' if you need guidance.\n";
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
