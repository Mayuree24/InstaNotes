import dayjs from "dayjs";

export function DateFormat(timestamp: string) {
  return dayjs(timestamp).format("DD/MM/YYYY");
}

export function StripHTMLTags(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}
