import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
  return http.get("/tutorials");
};

const get = (id: any) => {
  return http.get(`/tutorials/${id}`);
};

const create = (data: ITutorialData) => {
  return http.post("/tutorials", data);
};

const update = (id: any, data: ITutorialData) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
