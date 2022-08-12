import moment from "moment";

export interface ToDo {
  id: string;
  content: string;
  time: moment.Moment;
}
