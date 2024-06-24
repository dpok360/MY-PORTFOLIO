<Container>
  <TabsWrapper>
    <TabButton
      active={activeTab === "Home"}
      onClick={() => handleTabClick("Home")}
    >
      Home
    </TabButton>
    <TabButton
      active={activeTab === "About"}
      onClick={() => handleTabClick("About")}
    >
      About
    </TabButton>

    <TabButton
      active={activeTab === "Resume"}
      onClick={() => handleTabClick("Resume")}
    >
      Resume
    </TabButton>

    <TabButton
      active={activeTab === "Skills"}
      onClick={() => handleTabClick("Skills")}
    >
      Skills
    </TabButton>

    <TabButton
      active={activeTab === "Projetcs"}
      onClick={() => handleTabClick("Projects")}
    >
      Projects
    </TabButton>

    <TabButton
      active={activeTab === "Contact"}
      onClick={() => handleTabClick("Contact")}
    >
      Contact
    </TabButton>
  </TabsWrapper>

  <TabContent>
    <TabSection active={activeTab === "Home"}>
      <Home />
    </TabSection>

    <TabSection active={activeTab === "About"}>
      <About />
    </TabSection>

    <TabSection active={activeTab === "Resume"}>
      <Resume />
    </TabSection>

    <TabSection active={activeTab === "Skills"}>
      <Skills />
    </TabSection>

    <TabSection active={activeTab === "Projects"}>
      <h3>Projects</h3>
    </TabSection>

    <TabSection active={activeTab === "Contact"}>
      <Contacts />
    </TabSection>
  </TabContent>
</Container>;
