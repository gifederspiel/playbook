import { Handlers, PageProps } from "$fresh/server.ts";
import plays from "../plays.json" assert { type: "json" };
import { Play } from "../play.d.ts";
import Coat from "../components/coating.tsx";

const clean = (str: string) => str.replace(" ", "").toLocaleLowerCase();

export const handler: Handlers = {
  GET(req, ctx) {
    if(ctx.params.name == "favicon.ico") return Response.redirect(new URL(req.url).origin + "/images/favicon.svg", 302);
    const play = plays.find((play) =>
      clean(play.name) == clean(ctx.params.name)
    );
    if (!play) {
      return Response.redirect(new URL(req.url).origin, 302);
    }
    return ctx.render(play);
  },
};

export default function Greet({ data: play }: PageProps<Play>) {
  return (
    <Coat title={play.name}>
      <div class="plays">
        <div class="play">
          <a href="/">
            <button class="button-9" role="button">Zurück</button>
          </a>
          <video controls muted>
            <source src="/videos/4_links.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="play">
          <h2>Ablauf</h2>
          <ol>
            {play.moves.map((move) => <li>{move}</li>)}
          </ol>
        </div>
      </div>
    </Coat>
  );
}
