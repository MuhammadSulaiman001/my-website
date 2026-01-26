# How-To

## CareerCanvas theme

1. In dev, use `npm run dev`
2. For production, use `npm run build:css && npm run build`

- To update submodules:
    - Open use github web app to sync with the fork
        - If there are conflicts, then come here and merge felipe remote with local submodule then push your local
          submodule to remote,
    - Now you're synced with felipe's theme
    - In my-website, run `git submodule update --remote --merge` to make sure the submodule is updated
    - We're done with the theme, now, there are website changes, let's make sure the website is updated with felipe's
      changes
        1. Open `my-website-felipecordero.github.io` in another webstorm window
        2. Pull the changes with GitHub desktop (because `git pull --recurse-submodules` won't work! due to SSH
           permission!).
        3. Now, **check the new commits felipe made in his own website**
            - If there are no changes, then we're done.
            - If there are changes, then copy those changes to my-website manually, build locally to check the changes,
              make your edits, satisfied? build for production, commit and push.


## Coming soon theme:

1. Make your edits, test locally with `hugo server -D` (it will make baseURL `localhost:1313`)
2. Ready to publish? build the website with `hugo build` (this will return back the baseURL to `muhammad-sulaiman.com`),
   commit && push
3. DONE.

# Notes:

1. hugo themes can be found at https://themes.gohugo.io/ and at https://hugoblox.com/