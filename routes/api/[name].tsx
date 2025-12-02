import { define } from "../../utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const name = ctx.params.name;
    return new Response(
      `{"code":0,"msg":"hello","data":"{\"v\":1}"}`,
    );
  },
});
