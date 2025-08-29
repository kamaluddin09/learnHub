import api from "./Api";

export const createCourse = async (formData: FormData) => {
  const { data } = await api.post("/courses/createCourse", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("the posted data is :",data)
  return data;
};

