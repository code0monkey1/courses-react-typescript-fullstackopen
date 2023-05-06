# Courses React Typescript App ( Foundation )

 > Why to use Typescript with React ?
 >
 > 1. `Extra` / `Unwanted` props will be detected
 > 1. `Missing` props will be detected
 > 1. Props with `wrong types` will be detected

---
 _# To create a new react typescript app , execute the following command_ :

```bash 
  npx create-react-app my-app --template typescript 
```
---

> Initial Difference in the project structure :  
> 1. The `.js and .jsx` files are now `.ts and .tsx` files.
>
> 1. `root directory` contains a `tsconfig.json` file

### If you need to migrate your React app from Javascript to Typescript  : 


 > In the `tsconfig.json` file , Set `allowJs` to `true`. This allows us to keep a mix of TypeScript and JavaScript in our react project (e.g. if you are in the process of transforming a JavaScript project into TypeScript or something like that)
 >
 > Once the project has been totally transformed to Typescript , to create a pure TypeScript app, change that configuration to false ( `allowJs` : `false`) **if creating a new typescript project , always keep it _false_**

---

 ### Configuring ESLint :
 
 Create an `.eslintrc` file and fill in the following settings:   
 
```json
  //.eslintrc
 
  {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "plugins": ["react", "@typescript-eslint"],
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "rules": {
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "react/react-in-jsx-scope": 0
    }
}
 ```