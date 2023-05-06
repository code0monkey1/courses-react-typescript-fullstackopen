# Courses React Typescript App ( Foundation )

### Why to use Typescript with React ?

  1. `Extra` / `Unwanted` props will be detected
  1. `Missing` props will be detected
  1. Props with `wrong types` will be detected



1. To create a new react typescript app , execute the following command :

```bash 
      npx create-react-app my-app --template typescript 
```
   
    
  > Initial Difference in the project structure :  
  > 1. The `.js and .jsx` files are now `.ts and .tsx` files.
  >
  > 1. `root directory` contains a `tsconfig.json` file
    
  > **If you need to migrate your React app from Javascript to Typescript** : 
    
    
   > In the `tsconfig.json` file , Set `allowJs` to `true`. This allows us to keep a mix of TypeScript and JavaScript in our react project (e.g. if you are in the process of transforming a JavaScript project into TypeScript or something like that)
     >
     > Once the project has been totally transformed to Typescript , to create a pure TypeScript app, change that configuration to false ( `allowJs` : `false`) **if creating a new typescript project , always keep it _false_**

--------------------------------------------------------


1. **Configuring ESLint** :
 
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
    #### Explanation for our disabled rules in `.eslintrc`:
        
   1. `"@typescript-eslint/explicit-function-return-type":0,   "@typescript-eslint/explicit-module-boundary-types": 0`
        
      > These 2 are disabled , because the return type of most React components in either `null` or `JSX.Element` , so we don't need to check for these every time.
            
   1. `"react/react-in-jsx-scope": 0`  
      >  We will also disable `react/react-in-jsx-scope` since importing React is no longer needed in every file.
  
1. Next, we need to get our linting script to parse `*.tsx files`, which are the TypeScript `equivalent of React's JSX files`. We can do that by altering our lint command in `package.json` to the following:

     ```json
       //package.json
         "lint": "eslint './src/**/*.{ts,tsx}'"
     ```

1. Create your first REact Typescript Component :
    ```javascript
            interface WelcomeProps {
            name: string;
          }
          
      const Welcome = (props: WelcomeProps)  => {
        return <h1>Hello, {props.name}</h1>;
      };
      
      export default Welcome;

    ```
   > Another things `Different` about this typescript react app is that ,  the element received by `document.getElementById(root)` has been explicitly cast by the initial setting , as the return value of `document.getElementById(`root`)` is either `HTMLElement | null` , but the risk of casting it to HTML element is taken, as we are sure that the element with the `id:root` will be present in every react app .
    
    ```javascript
        const root = ReactDOM.createRoot(
          document.getElementById('root') as HTMLElement // done automatically
          );
    ```
---

## Courses Frontend : 


####  _Creating a Discriminated Union_ : 

  Suppose we have the following data :

  ```javascript
    
     const courseParts = [
      {
        name: "Fundamentals",
        exerciseCount: 10,
        description: "This is an awesome course part"
      },
      {
        name: "Using props to pass data",
        exerciseCount: 7,
        groupProjectCount: 3
      },
      {
        name: "Basics of type Narrowing",
        exerciseCount: 7,
        description: "How to go from unknown to string"
      },
      {
        name: "Deeper type usage",
        exerciseCount: 14,
        description: "Confusing description",
        backgroundMaterial: "https://type-level-typescript.com/template-literal-types"
      },
    ];
   ```
> We observe that we have the attribute `name` and `exerciseCount`  constant , but other attributes are different .
> 
> So, to handle such a dataset , we can create a **discriminated union** in order to switch between the different types of `data types` gracefully.
> 
---

1. First we create a `base type` consisting of the basic types (i.e `name` and `exerciseCount`)
   
     ```javascript
         interface CoursePartBase {
            name: string;
            exerciseCount: number;
          }
     ```