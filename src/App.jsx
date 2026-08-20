import React, { useRef } from "react";
import profile from "./assets/profile.jpg";

function App() {
  // ---------------- SECTION REFERENCES ----------------

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // ---------------- SMOOTH SCROLL ----------------

  const goToSection = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ---------------- NAVBAR STYLE ----------------

  const navStyle = {
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "15px",
    textDecoration: "none",
    transition: "0.3s",
  };

  // ---------------- BUTTON STYLE ----------------

  const primaryButton = {
    padding: "13px 28px",
    border: "none",
    borderRadius: "30px",
    background:
      "linear-gradient(90deg, #ffffff, #d9d7ff)",
    color: "#24133f",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255,255,255,0.35)",
  };

  // ---------------- SECTION STYLE ----------------

  const sectionStyle = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "90px 8%",
    position: "relative",
    overflow: "hidden",
  };

  // ---------------- HOME ----------------

  const Home = () => (
    <section ref={homeRef} style={sectionStyle}>

      {/* PURPLE GLOW */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(160,40,255,0.65), transparent 70%)",
          left: "-100px",
          top: "45%",
          filter: "blur(30px)",
          transform: "rotate(-10deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "550px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(100,30,255,0.7), transparent 70%)",
          right: "-100px",
          top: "45%",
          filter: "blur(35px)",
        }}
      />

      {/* HOME CONTENT */}

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* LEFT */}

        <div
          style={{
            maxWidth: "650px",
          }}
        >

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.15",
              margin: "0 0 12px",
              fontWeight: "800",
              color: "white",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "#ffffff",
                fontWeight:"800",

              }}
            >
              Meena Sowndharya
            </span>
          </h1>

          <h2
            style={{
              fontSize: "25px",
              margin: "0 0 20px",
              color: "#ffffff",
            }}
          >
            B.Com Graduate & Aspiring IT Professional
          </h2>

          <p
            style={{
              color: "#ddd8ec",
              fontSize: "16px",
              lineHeight: "1.8",
              maxWidth: "620px",
            }}
          >
            I am a B.Com graduate from Government Arts and
            Science College, Sivakasi. I am interested in the
            IT field and passionate about learning new
            technologies and developing creative projects.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >

            <button
              style={primaryButton}
              onClick={() => goToSection(contactRef)}
            >
              Contact Me
            </button>

            <button
              style={{
                padding: "13px 28px",
                borderRadius: "30px",
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.6)",
                fontSize: "15px",
                cursor: "pointer",
              }}
              onClick={() => goToSection(projectsRef)}
            >
              View Projects
            </button>

          </div>

          {/* SOCIAL */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "28px",
            }}
          >

            <div style={socialStyle}>GH</div>
            <div style={socialStyle}>in</div>
            <div style={socialStyle}>X</div>
            <div style={socialStyle}>▶️</div>

          </div>

        </div>


        {/* RIGHT PHOTO */}

      <div
  style={{
    width: "350px",
    height: "350px",
    minWidth: "350px",
    borderRadius: "50%",
    border: "4px solid #d8d0ff",
    background: "radial-gradient(circle, #552477, #211b43 65%, #141936)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 20px #ffffff, 0 0 50px #8d3dff, 0 0 90px rgba(128,45,255,0.7)",
    overflow: "hidden",
  }}
>
  <img
    src={profile}
    alt="Profile"
    style={{
      width: "275px",
      height: "275px",
      borderRadius: "50%",
      objectFit: "cover",
    }}
  />
</div>

      </div>

    </section>
  );


  // ---------------- ABOUT ----------------

  const About = () => (
    <section ref={aboutRef} style={sectionStyle}>

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >

        <p
          style={{
            color: "#c58aff",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          ABOUT ME
        </p>

        <h1
          style={{
            fontSize: "45px",
            color: "white",
            margin: "10px 0 25px",
          }}
        >
          About{" "}
          <span style={{ color: "#c78aff" }}>
            Me
          </span>
        </h1>

        <p
          style={{
            color: "#ddd8ec",
            fontSize: "18px",
            lineHeight: "1.9",
            maxWidth: "800px",
            margin: "0 auto 20px",
          }}
        >
          Hello! I am E. Meena Sowndharya. I have completed
          my B.Com degree from Government Arts and Science
          College, Sivakasi.
        </p>

        <p
          style={{
            color: "#ddd8ec",
            fontSize: "18px",
            lineHeight: "1.9",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          I am interested in starting my career in the IT
          industry. I enjoy learning new technologies and
          creating websites and applications.
        </p>


        {/* EDUCATION BOX */}

        <div
          style={{
            margin: "40px auto 0",
            maxWidth: "650px",
            padding: "28px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, rgba(90,35,120,0.55), rgba(30,35,75,0.65))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          }}
        >

          <h2 style={{ color: "#ffffff" }}>
            Education
          </h2>

          <p
            style={{
              color: "#ddd8ec",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            <b>B.Com</b>
            <br />
            Government Arts and Science College, Sivakasi
            <br />
            2023 - 2026
          </p>

        </div>

      </div>

    </section>
  );


  // ---------------- SKILLS ----------------

  const Skills = () => {

    const skills = [
      "MS Office",
      "Tally ERP 9",
      
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React JSX",
    ];

    return (
      <section ref={skillsRef} style={sectionStyle}>

        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            textAlign: "center",
          }}
        >

          <p
            style={{
              color: "#c58aff",
              fontWeight: "bold",
            }}
          >
            MY SKILLS
          </p>

          <h1
            style={{
              fontSize: "45px",
              color: "white",
            }}
          >
            My{" "}
            <span style={{ color: "#c78aff" }}>
              Skills
            </span>
          </h1>

          <p
            style={{
              color: "#ddd8ec",
              fontSize: "18px",
            }}
          >
            These are the technical and professional skills
            I have learned.
          </p>


          {/* SKILL BOXES */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              marginTop: "45px",
            }}
          >

            {skills.map((skill) => (

              <div
                key={skill}
                style={{
                  padding: "25px 15px",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(135deg, rgba(80,30,110,0.65), rgba(28,34,70,0.7))",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  fontSize: "17px",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.25)",
                }}
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>
    );
  };


  // ---------------- PROJECTS ----------------

  const Projects = () => {

    const projects = [
      {
        title: "Personal Portfolio",
        description:
          "A personal portfolio website created using React JSX.",
      },
      {
        title: "Food Website",
        description:
          "A responsive food website project created with attractive design.",
      },
      {
        title: "Mark Statement",
        description:
          "A student mark statement project with student details and marks.",
      },
    ];

    return (
      <section ref={projectsRef} style={sectionStyle}>

        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            textAlign: "center",
          }}
        >

          <p
            style={{
              color: "#c58aff",
              fontWeight: "bold",
            }}
          >
            MY WORK
          </p>

          <h1
            style={{
              fontSize: "45px",
              color: "white",
              marginBottom: "15px",
            }}
          >
            My{" "}
            <span style={{ color: "#c78aff" }}>
              Projects
            </span>
          </h1>

          <p
            style={{
              color: "#ddd8ec",
              fontSize: "17px",
            }}
          >
            Some of my projects and works.
          </p>


          {/* 3 BOXES - SAME LINE */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, 1fr)",
              gap: "25px",
              marginTop: "45px",
            }}
          >

            {projects.map((project) => (

              <div
                key={project.title}
                style={{
                  minHeight: "250px",
                  padding: "30px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, rgba(91,35,120,0.65), rgba(25,32,68,0.75))",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                  boxShadow:
                    "0 10px 35px rgba(0,0,0,0.3)",
                  boxSizing: "border-box",
                  textAlign: "left",
                }}
              >

                <h2
                  style={{
                    color: "#ffffff",
                    marginTop: 0,
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    color: "#d8d2e5",
                    lineHeight: "1.7",
                  }}
                >
                  {project.description}
                </p>

                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    border: "none",
                    background: "#ffffff",
                    color: "#30154c",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View Project
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>
    );
  };


  // ---------------- CONTACT ----------------

  const Contact = () => (
    <section ref={contactRef} style={sectionStyle}>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >

        <p
          style={{
            color: "#c58aff",
            fontWeight: "bold",
          }}
        >
          GET IN TOUCH
        </p>

        <h1
          style={{
            fontSize: "45px",
            color: "white",
            margin: "10px 0 20px",
          }}
        >
          Contact{" "}
          <span style={{ color: "#c78aff" }}>
            Me
          </span>
        </h1>

        <p
          style={{
            color: "#ddd8ec",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          I am looking for opportunities to start my career
          in the IT field.
        </p>


        {/* CENTER CONTACT BOX */}

        <div
          style={{
            width: "100%",
            maxWidth: "650px",
            margin: "0 auto",
            padding: "35px 40px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, rgba(90,35,120,0.7), rgba(30,35,75,0.75))",
            border:
              "1px solid rgba(255,255,255,0.18)",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.35)",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >

          <p>
            <b>Name:</b> E. Meena Sowndharya
          </p>

          <p>
            <b>Qualification:</b> B.Com
          </p>

          <p>
            <b>College:</b> Government Arts and Science
            College, Sivakasi
          </p>

          <p>
            <b>Location:</b> Sivakasi, Tamil Nadu
          </p>

          <p>
            <b>Email:</b> meenasowndharyae@gmail.com
          </p>
          
          <p>
            <b>Phone:</b> 9361282232
          </p>

        </div>

      </div>

    </section>
  );


  // ---------------- MAIN ----------------

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 50%, rgba(100,20,140,0.55), transparent 35%), radial-gradient(circle at 85% 50%, rgba(40,50,130,0.65), transparent 35%), linear-gradient(110deg, #19062b, #10162f 55%, #10182d)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        scrollBehavior: "smooth",
      }}
    >

      {/* EXTRA PURPLE LIGHT */}

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: "45%",
          height: "100px",
          background:
            "linear-gradient(90deg, transparent, rgba(170,40,255,0.45), rgba(100,50,255,0.5), transparent)",
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />


      {/* NAVBAR */}

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          boxSizing: "border-box",
          background:
            "rgba(20,10,42,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom:
            "1px solid rgba(255,255,255,0.15)",
        }}
      >

        {/* LOGO */}

        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ffffff",
            cursor: "pointer",
          }}
          onClick={() => goToSection(homeRef)}
        >
          Meena.
        </div>


        {/* NAVIGATION */}

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >

          <span
            style={navStyle}
            onClick={() => goToSection(homeRef)}
          >
            Home
          </span>

          <span
            style={navStyle}
            onClick={() => goToSection(aboutRef)}
          >
            About
          </span>

          <span
            style={navStyle}
            onClick={() => goToSection(skillsRef)}
          >
            Skills
          </span>

          <span
            style={navStyle}
            onClick={() => goToSection(projectsRef)}
          >
            Projects
          </span>

          <span
            style={navStyle}
            onClick={() => goToSection(contactRef)}
          >
            Contact
          </span>

        </div>

      </nav>


      {/* ALL VERTICAL PAGES */}

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}


// ---------------- SOCIAL STYLE ----------------

const socialStyle = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "13px",
};


export default App;