import dayjs from "dayjs";
import "dayjs/locale/id";

export default function getDate() {
  return dayjs().locale("id").format("DD MMMM YYYY");
}