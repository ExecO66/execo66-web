import Router from "next/router";

export async function jsonFetchWrapper<T extends object>(
  url: string,
  opts?: RequestInit
): Promise<{
  error: Error | null;
  data: T | null;
}> {
  return fetch(url, opts)
    .then(async (r) => {
      if (r.status == 401) {
        Router.push("/account");
      }
      if (r.ok) {
        try {
          const json = await r.json();
          return { error: null, data: json as T };
        } catch {
          return {
            error: new Error("body is malformed or not json"),
            data: null,
          };
        }
      } else {
        return {
          error: new Error(`request failed with status code ${r.status}`),
          data: null,
        };
      }
    })
    .catch((e) => {
      return { error: e, data: null };
    });
}
