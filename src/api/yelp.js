import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
   headers: {
      Authorization:
         "Bearer wMAShMpgb6Qba1dqlimHYMjzEzqkIlgYoTfgBuMTgxfVIPAqgUO003pz9-FckU7FErsiQGNrbTkTse4OqndmFKZAdcPMfAYaUyhGZ7rcuuE-nYVtiQ_FgfwRw-gEZXYx",
   },
});

// wMAShMpgb6Qba1dqlimHYMjzEzqkIlgYoTfgBuMTgxfVIPAqgUO003pz9-FckU7FErsiQGNrbTkTse4OqndmFKZAdcPMfAYaUyhGZ7rcuuE-nYVtiQ_FgfwRw-gEZXYx

// Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx
