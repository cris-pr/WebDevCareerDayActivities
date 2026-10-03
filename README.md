# WebDev Career Day Activities 🧑‍💻

Three beginner-friendly coding activities for 6th and 7th graders,
built to run in **CodePen**. Each activity lives in its own folder with
three files that map directly onto CodePen's three panels:

| CodePen panel | File     |
|---------------|----------|
| **HTML**      | `index.html` |
| **CSS**       | `style.css`  |
| **JS**        | `script.js`  |

---

## The Activities

### 1 · Hello, _____! 👋 (`01-hello-name`)
A simple page that asks for a name and shows a friendly greeting.
Students type their name and press the button to make it appear on screen.

**Learning goal:** See how HTML (structure), CSS (style), and
JavaScript (action) work together.

**Answer / customize spots:** the greeting message and colors live in
`script.js` and `style.css`.

### 2 · Reverse the Animation ⚽ (`02-reverse-the-animation`)
A ball rolls across the screen from left to right. The challenge is to
**make it go the other way**.

**Answer (two ways):** swap the `0%` and `100%` values in the
`@keyframes roll` rule, *or* add `animation-direction: reverse;` to the
`.ball` rule. Both hints are written as comments in `style.css`.

### 3 · Favorite Movies Gallery 🎬 (`03-favorite-movies-gallery`)
A grid of movie "posters" with a few examples already filled in.
Students copy the template card and change the emoji, title, year, and
note to add their own favorite movie.

**Learning goal:** Repeat the same HTML "card" pattern to grow a layout,
and see CSS Grid line everything up automatically.

> **Note on Activity 3:** The organizer mentioned an alternative
> activity ("the similar one Kayleigh mentioned"). If you'd rather use
> that instead, drop the details here and we'll swap it in.

---

## Setting up CodePen (for the organizer)

1. **Create a free account** at [codepen.io](https://codepen.io/).
   *Plan ahead:* each student will need their own free account, so
   schedule time to sign them up before the activity (or ask the
   school's IT folks about a shared/classroom setup).
2. **Make a new Pen** for each activity (click **Pen → New Pen**).
3. Copy the contents of each file into the matching panel:
   - `index.html` → the **HTML** panel
   - `style.css`  → the **CSS** panel *(CodePen wraps it in no tags, just paste)*
   - `script.js`  → the **JS** panel
4. The preview updates live as students type — perfect for showing
   cause-and-effect.
5. Save each Pen and share the links with the students.

### Cheat-sheet: opening a file to copy

You can open each activity folder here on GitHub and click the file to
see its contents, then copy. Or download the whole repo as a ZIP and
open the files in any text editor.

---

## Suggested lesson flow (~30–40 min)

1. **5 min** — Show Activity 1 as a finished demo. Explain HTML =
   structure, CSS = style, JS = action.
2. **10 min** — Everyone builds Activity 1 together (Hello, name!).
3. **10 min** — Activity 2: let students *try* the reverse challenge
   before revealing one of the two answers.
4. **10–15 min** — Activity 3: free-build a shared gallery; have
   students take turns showing off their favorite movie poster.

---

## License

[MIT](LICENSE)