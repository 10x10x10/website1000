import React from "react";
import Link from "next/link";
import { aboutData } from "../../data.js";
import { styled, mediaMap, } from "../../styles/stitchesStyles.js";



const AboutContainer = styled('div', {
  display: 'flex',
  gap: 48,
  width: '100%',
  justifyContent: 'center',
  flexGrow: 1,
  maxWidth: 1920,

  '& p': {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.6,
    whiteSpace: 'pre-line',
  },

  variants: {
    media: {
      s: {
        flexDirection: 'column',
        marginTop: 64,
      },
      l: {
        flexDirection: 'row',
        marginTop: 120,
      }
    }
  }

});

const ContextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 120,
});

const HeadIconContainer = styled('div',{
  display: 'flex',
  justifyContent: 'center',
  variants: {
    media: {
      s: {
        width: '100%',
      },
      l: {
        width: 240,
      }
    }
  }
});

const HeadIcon = styled('img', {  
  width: 240,
  height: 240,
  variants: {
    media: {
      s: {
        position: 'inherit',
      },
      l: {
        position: 'fixed',
      }
    }
  }
});

const Title = styled('h1', {
  fontSize: 32,
  fontWeight: 600,
  margin: 0,
  whiteSpace: 'pre-line',
  //marginBottom: 48,
});

const IntroTitle = styled(Title, {  
  variants: {
    media: {
      s: {
        fontSize: 32,
      },
      l: {
        fontSize: 44,
      }
    }
  }

});

const Block = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 800,
  gap: 40,
});

const SubBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  '& h2': {
    fontSize: 18,
    fontWeight: 600,
    margin: 0,
    width: 160,
  },
  variants: {
    media: {
      s: {
        flexDirection: 'column',
        gap: 16,
        '& ul': {
          paddingLeft: 4,
        },
      },
      l: {
        flexDirection: 'row',
        gap: 48,
      }
    }
  }
});

const BlockList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  margin: 0,
  padding: 0,

  '& li': {
    listStyleType: 'none',
    opacity: 0.8,
  }
})

export default function About(props) {

  const { intro, contacts, projects, experiences, toolkit, } = aboutData;

  return (
    <AboutContainer
      className="about-container"
      media={mediaMap}
    >

      <HeadIconContainer media={mediaMap}>
        <HeadIcon media={mediaMap} src={'./logo/logo_l.png'} />
      </HeadIconContainer>

      <ContextContainer>
        <Block>
          <IntroTitle media={mediaMap}>{intro.title}</IntroTitle>
          {
            intro.descriptions.map((description) => {
              return <p key={description}>{description}</p>;
            })
          }
        </Block>


        <Block>
          <Title>Projects</Title>
          {
            projects.map((el) => {
              return (
                <SubBlock key={el.year} media={mediaMap}>
                  <h2>{el.year}</h2>
                  <BlockList>
                    {
                      el.items.map((item) => {
                        return (
                          <div key={item.text}>
                            <li>{item.text}</li>
                          </div>);
                      })
                    }
                  </BlockList>
                </SubBlock>);
            })
          }
        </Block>

        <Block>
          <Title>Experience</Title>
          {
            experiences.map((el) => {
              return (
                <SubBlock key={el.title} media={mediaMap}>
                  <h2>{el.title}</h2>
                  <BlockList>
                    {
                      el.items.map((item) => {
                        return (
                          <div key={item.text}>
                            <li>{item.text}</li>
                          </div>);
                      })
                    }
                  </BlockList>
                </SubBlock>);
            })
          }
        </Block>

        <Block>
          <Title>Toolkits</Title>
          {
            toolkit.map((el) => {
              return (
                <SubBlock key={el.title} media={mediaMap}>
                  <h2>{el.title}</h2>
                  <BlockList>
                    {
                      el.items.map((item) => {
                        return (
                          <div key={item.text}>
                            <li>{item.text}</li>
                          </div>);
                      })
                    }
                  </BlockList>
                </SubBlock>);
            })
          }
        </Block>

        <Block className="contact">
          <Title>Let's connect</Title>
          {
            contacts.map((contact) => {
              return (
                <SubBlock key={contact.link}>
                  {/* <img className="contact-icon" src={contact.icon} /> */}
                  <a href={contact.link} target="_blank">{contact.text}</a>
                </SubBlock>);
            })
          }
        </Block>

      </ContextContainer>
    </AboutContainer>
  );
}