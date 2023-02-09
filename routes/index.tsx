import { Head } from "$fresh/runtime.ts";
import Coat from "../components/coating.tsx";
import { Play } from "../play.d.ts";
import plays from "../plays.json" assert { type: "json" };

export default function Home() {
  return (
    <Coat title="Playbook">
      <div class="plays">
        {plays.map((play) => playCard(play))}
      </div>
    </Coat>
  );
}

const playCard = (play: Play) => (
  <div class="play">
    <h2>{play.name}</h2>
    <video controls muted>
      <source src={"videos/" + play.name.toLowerCase().replace(" ", "_") + ".mp4"} type="video/mp4" />
    </video>
    <br />
    <a href={play.name}>Details</a>
  </div>
);
