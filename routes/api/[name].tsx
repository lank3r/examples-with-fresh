import { define } from "../../utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const name = ctx.params.name;
    const responseData = {
    "code": 0,
    "msg": "hello",
    "data": {
        "v": 1
    }
}
    return new Response(
      JSON.stringify(responseData), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
    );
  },
});
