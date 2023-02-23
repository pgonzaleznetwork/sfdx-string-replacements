# Salesforce Sfdx string replacements

This repo provides a sample implementation of [Salesforce sfdx string replacements](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm) in a CI/CD pipeline.

Read the full article here https://www.pablogonzalez.io/string-replacements/

## Environment variables

The variables are defined in org-specific `.env` files in the root directory.

## Loading the env variables

I'm using [this GitHub action](https://github.com/xom9ikk/dotenv) because it's not possible to natively read a `.env` file. Go leave a start!

Read the documentation before you use it. 

## Deploy command with loaded variables

You can then use this in your workflow

```yaml
- name: Load .env file
        uses: xom9ikk/dotenv@v2
        with:
          path: ./
          mode: prod
      - name: print env variables
        run: echo ${{env.HAPPY_SOUP_URL}}
      - name: Deployment 
        run: sfdx force:source:deploy -p "force-app"  --json
        shell: bash
```