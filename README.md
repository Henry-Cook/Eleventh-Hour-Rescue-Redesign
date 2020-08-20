# Eleventh Hour Rescue (Redesign)

![MERN](https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png)

## Project Overview
Collaboratve full-stack redesign of a local nonprofit's website between General Assembly SEI and UX fellows.

## Dataflow and Layout

[text link](https://whimsical.com/LjJ2NeDioewmL2MvciYwsB)

## Team Expectations

[text link](https://docs.google.com/document/d/1fVny92CdTiep-hjwiTzCODf-YCM_jhu9lDEkqwpcJwg/edit?usp=sharing)

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