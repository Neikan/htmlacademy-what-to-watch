// Импорт типов, констант, утилит
import {BASE_URL} from "../../consts/common-data";


const userAdapter = (user) => ({
  id: `${user.id}`,
  email: user.email,
  name: user.name,
  avatarUrl: `${BASE_URL}${user.avatar_url}`,
});


export default userAdapter;
