/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 192.40944730386272,
      "color": "#ffffff",
      "opacity": 0.6092965831288987,
      "width": 0
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 160.3412060865523,
        "rotateY": 641.3648243462092
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);



let projectsContainer = document.getElementById('projects_container');

fetch('https://raw.githubusercontent.com/HELAL15/my-portfolio/master/projects.json')
  .then(response => response.json())
  .then(data => {

    data.projects.map((project) => {

      // Create a new project element
      let projectElement = document.createElement('div');
      projectElement.className = 'project wow';
      projectElement.innerHTML = `
        <div class="row gy-3 align-items-center justify-content-center">
          <div class="col-md-5 col-text">
            <div class="details">
              <div class="about">
                <h3 class='name'>${project.name}</h3>
                <p class='desc'>${project.description}</p>
              </div>
              <div class="links">
                <a href="${project.links.website}" class="btn main-btn" target="_blank">visit website</a>
                <a href="${project.links.github}" class="btn main-btn" target="_blank">code</a>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-img">
            <div class="project_img">
              <img src="${project.image}" alt="${project.name}">
            </div>
          </div>
        </div>
      `;

      // Append the project element to the container
      projectsContainer.appendChild(projectElement);
    });

    let projectElements = document.querySelectorAll('#projects_container .project .row');
    let projects = document.querySelectorAll('#projects_container .project');
    
    for (let i = 0; i < projectElements.length; i++) {
      let row = projectElements[i];
      let project = projects[i];
      i % 2 === 0 ? (row.style.direction = 'rtl') : (row.style.direction = 'ltr');
      i % 2 === 0 ? (project.classList.add('fadeInUp')) : (project.classList.add('fadeInDown'));
    }
  })
  .catch(error => console.error('Error fetching data:', error));





  
  
    const btn = document.getElementById('send_button');

    
    document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault();
    
      btn.innerText = 'Sending...';
    
      const serviceID = 'default_service';
      const templateID = 'template_6tglvhp';

    

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.innerText = 'Send message';
            alert('Message sent successfully!');
          }, (err) => {
            btn.innerText = 'Send message';
            alert(JSON.stringify(err));
          });
      
    });
    
    
    
    emailjs.init('vDYhwaw47FS4oc-yC')
    
    
    









  $('#loader').fadeOut(1000);

  new WOW().init();