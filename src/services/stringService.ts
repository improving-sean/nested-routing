export function formatPhoneNumber(phone: string) {
  const phoneArr = phone.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/) ?? [];
  return !phoneArr[2] ? phoneArr[1] : "(" + phoneArr[1] + ") " + phoneArr[2] + (phoneArr[3] ? "-" + phoneArr[3] : "");
}

export const objectToQueryString = (params: any) =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

export const scrub = (content: string) => content;
export const scrubHtmlElements = (content: string) => content.replace(/&[a-zA-Z]*;\s{0,1}/g, "");

export const stringToBool = (str: string | boolean | undefined) =>
  typeof str === "boolean" ? str : (str as string)?.toLowerCase() === "true" || (str as string)?.toLowerCase() === "1";

export const groupBy = (items: Array<any>, key: string) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );
export const createSlug = (str: string) => scrubHtmlElements(str.toLowerCase()).trim().replaceAll(" ", "-");
export const firstNumberIndex = (str: string) => str.search(/\d/);
