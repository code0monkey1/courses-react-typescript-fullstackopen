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

1. First we create a `CoursePartBase` consisting of the basic types (i.e `name` and `exerciseCount`)
   
     ```javascript
         interface CoursePartBase {
            name: string;
            exerciseCount: number;
          }
     ```
1. Next we create the various interface types for the given data , with the discriminant being **kind** , which _will help in discriminating the values of the formed union_ .
  
    ```javascript
     
      
      interface CoursePartBasic extends CoursePartBase {
        description: string;
        kind: "basic"
      }
      
      interface CoursePartGroup extends CoursePartBase {
        groupProjectCount: number;
        kind: "group"
      }
      
      interface CoursePartBackground extends CoursePartBase {
        description: string;
        backgroundMaterial: string;
        kind: "background"
      }

      // This is the `discriminated union`, discriminating of the basis of the attribute `kind`
      type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;
    ```

#### _Type Narrowing discriminated union values_ :

   > We have a problem here !!    
   >
   > TypeScript will only allow an operation (or attribute access) if it is _valid for every member of the union._
   >
   > So how do we go about solving this issue ? 
   >
   >_The solution is to narrow the union with code... Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code._

**One handy way to narrow these kinds of types in TypeScript is to use switch case expressions.**

> Once TypeScript has inferred that a variable is of `union type` and that `each type in the union contain a certain literal attribute (in our case kind)`, we can use that as a type identifier.
> 
>  We can then build a switch case around that attribute and TypeScript will know which attributes are available within each case block.
>
> **_The specific technique of type narrowing where a union type is narrowed based on literal attribute value is called discriminated union._**



```javascript
    /**
     * Helper function for exhaustive type checking
     */
    const assertNever = (value: never): never => {
      throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
      );
};
```