# SUTDCO Homepage Documentation

Updated on 16th May 2020.

Contact: chineseorchestra@club.sutd.edu.sg

Special thanks to OpenSUTD.

---

---

## Introduction

This is the repository for SUTD Chinese Orchestra Club's homepage, which can be found here: https://sutdco.opensutd.org/. This README is mainly to serve as a guide and platform for future Committees should they decide to continue using this resource, as well as some documentation.

We're using Jekyll, a static site generator, published on Github Pages under the OpenSUTD domain. The theme used (as of May 2020) is ["Stylish Portfolio"](https://github.com/vidhyav656/startbootstrap-stylish-portfolio-jekyll); this is its [default view](https://vidhyav656.github.io/startbootstrap-stylish-portfolio-jekyll/). You can easily find more themes by googling for "Jekyll Themes", **but** note that changing the theme essentially means a complete rebuild, since each theme has its own design and content placement (which is the point of the theme, right). If you're going this route, but only just starting out, head to the [Installation](#installation-and-everything-else) section.

Alternatively, you can add/modify design and features to the site, in which case I will direct you to the [Documentation](#documentation) section.

If you're only updating the content of the site, the next section should be the most relevant and important.

---

---

## Content updates

### Writing new pages

All pages are in Markdown format, because it is easier to get to writing the content. One disadvantage, however, is that in Markdown you can't customise too much, and if you want heavy styling you'll have to do HTML within the Markdown or straight up write in full HTML. In any case:

To add new pages, simply add a new file, name it whatever you want, with the extension `.md`. Then, input the following at the start of the document:

`---`

`layout: the_layout_you_want_the_page_to_inherit`

`title: your_title`

`permalink: /where_your_page_is_located_on_the_site/`

`---`

You can check our `about.md` for an example. After that chunk, just write everything with Markdown formatting.

---

### Adding new Highlights

To change the Highlights, you'll have to go to the `highlights.yml` file and change the properties for it (title, date, etc.). The embed code will have to be taken from the post/video you want to feature, and please follow the instructions I placed in the comments in that file.

---

---

## Documentation

I suppose this isn't really documentation, just more advanced things and structure to look out for in the repo.
=======
---

### Editing CSS and JS

WIP

---

### \_layouts & \_includes & \_posts

The \_includes folder contains extremely important code that define how the site looks like. Likewise, for \_layouts folder, as the name suggests, it contains the code for how each page looks like.

Now, for \_posts, this is supposed to contain Markdown documents just like the individual Markdown pages. However, this is more for blogging, where there's a date and things like that. We don't use it, but if you can find a way to, why not. More info can be found [here](https://jekyllrb.com/docs/posts/).

---

### Others

1. Commenting in JS: //your comment

   Commenting in CSS and jQuery: /\*your comment\*/

   Commenting in HTML and Markdown: \<!-- your comment -->

   Commenting in YAML: #your comment

2. I do not recommend touching anything inside of \_site, since I think that is what's being used to build the site. All changes you make outside will be translated in there, don't worry.

3. Images (img) and icons (svg) are all placed inside of assets, and I recommend doing so as well. The only exception is **favicon**.

4. Favicon is the little icon that shows up on your browser tab and on your mobile browser's favourites. I used this [site](https://favicon.io/) to generate everything from our logo. These should be placed in the root directory if I'm not mistaken, and then those codes that they give should be placed in the \<head> section of the layouts (default.html, page.html, etc.)

---

---

## Installation and everything else

### HTML, CSS, JS

The main three you'll use for web develoment. HTML controls your elements (objects; what is being shown), CSS controls your styles (how it is being shown), and JS controls your events/scripts (fancy UI stuff). It's essentially designing and arranging a page, including how it interacts, all via text. Do read up on the **Box Model**. There's honestly way, way too much content here, but I do recommend [this](https://developer.mozilla.org/en-US/) for accurate documentation, and [this](https://www.w3schools.com/cssref/default.asp) for easy skimming of all the tags and properties in HTML and CSS respectively. Youtube is your best friend here, or if you're inheriting this from someone, hopefully that someone will be.

---

### Visual Studio

You can use most code editors to edit, _or even edit on Github itself_, although I would only recommend that for editing Markdown, definitely not code.

Moving on, for Visual Studio there are a few useful extensions:

1. [IntelliSense for CSS Class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
2. [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
3. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
4. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

   After installing, open `Settings` (gear icon on bottom-left of Visual Studio), then search for `editor.formatOnSave`. Tick the box.

5. [Final newline](https://marketplace.visualstudio.com/items?itemName=samverschueren.final-newline)

   Again, open `Settings`, search for `files.insertFinalNewLine`, and tick the box.

6. [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

### Jekyll

Jekyll is a site generator that is compatible with Github Pages, which is what's being used to host the site. Should you use Jekyll, first go to Visual Studio, then go to the `Terminal` tab on top, then click `New Terminal`. For the next few (or many) steps, all command lines are supposed to be entered in _this terminal_. Follow these instructions to install Jekyll for [Windows](https://jekyllrb.com/docs/installation/windows/) or [Mac](https://jekyllrb.com/docs/installation/macos/).

Then,

1. install [Jekyll Snippets](https://marketplace.visualstudio.com/items?itemName=ginfuru.vscode-jekyll-snippets), which stops Visual Studio from misreading Jekyll-specific code.
2. if you have installed exactly as described above, reconfigure HTMLHint by going to `Extensions` tab on the _left_ of Visual Studio and searching for HTMLHint. Click `Manage` (the small gear icon), then `Configure Extension Settings`.

Under `HTMLHint: Options`, click `Edit in settings.json`.

Add this:

`"htmlhint.options": { "tagname-lowercase": true, "attr-lowercase": true, "attr-value-double-quotes": true, "doctype-first": false, "tag-pair": true, "spec-char-escape": true, "id-unique": true, "src-not-empty": true, "attr-no-duplication": true, "title-require": true }`

And that's it.

---

### Github

I don't know much about the nitty-gritty of Github either, but I figured I'll still write this section since the entire site is hosted on Github Pages so you _will_ have to use it. The basics of its workings are as follows:

**Base repository**: Also called the 'master' branch. If you're reading this on Github, this is the place. This is where the entire, original code will be found. To edit, you'll either need to 1. **fork**, or 2. be granted access.

**Forking**: A fork can be done by literally anyone so long as they have a Github account. A fork is essentially a **linked clone** of the base repository. Others can see your fork since it is tied to your profile, but otherwise you are free to edit everything, including fully rebuilding it. If I'm not mistaken, you can even fetch new changes in the base repository. To push changes to the base repository, a **pull request** has to be made to the base repository.

**Access as collaborator**: As the name says, the repository admin can grant write permissions to collaborators, in which case you can then directly **clone** the base repository.

**Cloning**: Speaking of cloning, you actually don't need to be a collaborator to clone; it's similar to forking in that it clones, but it's saved as a local copy instead of a linked fork (you can think of it as the Github automatically uploading your clone for you). You can clone from the Github interface, or via **Github Desktop**.

**Github Desktop**:
I recommend using this to clone, and for pushing changes and everything else since it's all packaged nicely into a GUI. To clone using Github Desktop, click "Open in Desktop" on the Github repository, or click "Add -> Clone" on the top left-hand corner of Github Desktop.

Once you have cloned the base repository, _I highly recommend adding a new **branch**_, even though you can directly push changes to the base repository and by extension the website. This way, the code changes you made will be tagged to that branch, and once you're done with editing the code, you **push** to the online repository (which is Github; remember your clone is a local copy).

**Pushing to origin**: Kept talking about this but never elaborated. This generally means applying the changes made to the code by you. Before pushing, you will need to **commit** these changes, which can be all be done within Github Desktop. You will generally push to your branch/fork, then start a **pull request**.

**Pull Request**: A pull request is received by the collaborators of the base repository (which might include yourself). Essentially, when you send a pull request, you're asking the base repository owners to accept and 'pull' your code. Then, if the changes are verified to be fine, a **merge** can be done, which will see the branch's changes applied to the base repository, and by extension the website.
