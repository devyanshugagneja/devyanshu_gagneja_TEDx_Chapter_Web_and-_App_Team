import React from "react";

export default function AboutUs() {
  const SidePannelStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    height: "100vh",
    width: "27vw",
    color: "#ff5c5c",
    backgroundColor: "red",
    opacity: "1",
    zIndex: "-1",
    writingMode: "vertical-lr",
    fontSize: "22.22222vh",
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "right",
    display: "block",
  };
  const contentStyle = {
    width: "100%",
    minHeight: "100vh",
    padding: "20vh 12vw",
    margin: 0,
    color: "inherit",
    fontFamily: "inherit",
    textDecoration: "none",
    boxSizing: "border-box",
    textAlign: "justify",
    maxWidth: "1000px",
  };

  return (
    <div >
      <div style={SidePannelStyle}>
        <span
          class="text"
          id="section-title"
          data-v-ad9084b8=""
          style={{ transition: "opacity 0.15s ease 0s", opacity: "1" }}
        >
          About.
        </span>
      </div>
      <div style={contentStyle}>
        <h2 style={{color: "#9b9b9b",}}>ABOUT</h2>
        <h3><b> VIT-Bhopal</b></h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          nostrum, sit ipsa eveniet iusto alias laudantium eligendi laborum
          accusantium veniam. Odit laboriosam odio earum, quam nisi excepturi
          fugiat reprehenderit nostrum dolor molestias! Sint non exercitationem,
          odio ipsa soluta dignissimos quidem consectetur adipisci illo omnis
          unde accusamus alias magnam eveniet eaque, cumque cum facilis. Sequi
          quidem inventore fugiat, maiores nesciunt sapiente mollitia odio iusto
          voluptas saepe eveniet consequuntur sint expedita alias necessitatibus
          incidunt accusamus veritatis voluptatibus aliquam autem eaque
          obcaecati at sunt! Ut eum cupiditate quam illum maiores labore fuga
          mollitia temporibus vel voluptas reiciendis qui nihil quis id facilis
          aliquam, ducimus quaerat vitae beatae quasi consequuntur! Mollitia
          vitae ullam facilis eos iure eius animi dolor. Reiciendis minima, id
          eveniet laboriosam nulla cum obcaecati, non, quod temporibus
          perspiciatis corrupti laudantium animi voluptatibus distinctio
          recusandae! Quos recusandae eum error optio tenetur facere. Non
          cupiditate similique sapiente doloribus. Mollitia fuga tenetur dolores
          ipsum laudantium similique eos consectetur, quis, hic quia voluptas
          sequi sunt quos harum asperiores impedit tempore minima ad quidem
          omnis. Voluptate reprehenderit debitis veritatis suscipit velit
          quaerat voluptatibus dolore ut ea ab, eum nihil veniam architecto rem,
          deleniti soluta assumenda accusamus optio accusantium, neque quis.
          Pariatur, expedita corporis. Cum, quo aliquam?
        </p>
      </div>
      <div style={contentStyle}>
      <h2 style={{color: "#9b9b9b",}}>ABOUT</h2>
      <h3><b> TED</b></h3>
      <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.</p>
      </div>
    </div>
  );
}
