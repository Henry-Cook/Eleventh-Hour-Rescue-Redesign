# Eleventh Hour Rescue (Redesign)


![Beesss](https://media.discordapp.net/attachments/447199538105810945/746067493809946705/screen_shot_2020-08-20_at_2.png)
![Bees](https://media.giphy.com/media/QBYeMohXoVUJBtlfFD/giphy.gif)


## Project Overview
Collaboratve full-stack redesign of a local [nonprofit's](https://www.ehrdogs.org/) website between General Assembly SEI and UX fellows. This project was built adhearing to the MERN stack: MongoDB for the database, Express and Node for the server, and the front end was built in React.   

## Team Documents

[Dataflow](https://whimsical.com/LjJ2NeDioewmL2MvciYwsB)

[Team Expectations](https://docs.google.com/document/d/1fVny92CdTiep-hjwiTzCODf-YCM_jhu9lDEkqwpcJwg/edit?usp=sharing)

## MongoDB Schema

```javascript
const Stories = new Schema(
  {
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    story: { type: String, required: true },
  },
  { timestamps: true }
  );
}
```


## Project Priority

### MVP 

- Functional back-end
- Clean React architecture
- Full CRUD implementation to "Adoption Stories"
- Front-end matches UX design

### PostMVP  

- CRUD implementation to "Donate" form
- "Confirm" page design following interraction with "Donate"
- CRUD implementation to "Leadership" component
- Redirect page from dead links in design

![MERN](https://raw.githubusercontent.com/Henry-Cook/Eleventh-Hour-Rescue-Redesign/feature/readme/assets/mern-img.png)
