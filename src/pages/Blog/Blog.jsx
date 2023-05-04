/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className='ml-20'>
                <h2 className='font-bold'>Question 1: Tell us the differences between uncontrolled and controlled components.</h2>
                <ul>
                    <br />
                    <h2 className='font-bold'>Controlled Component :</h2>
                    <br />
                    <li>1. Managed by React state</li>
                    <li>2. Parent component updates state on user interaction</li>
                    <li>3. Data flows from parent component to component</li>
                    <li>4. Easier to debug</li>
                    <li>5. Generally faster as there's less state management</li>
                    <li>6. Less complex code</li>
                    <li>7. Considered a best practice</li>
                </ul>
                <br />
                <ul>
                    <h2 className='font-bold'>Uncontrolled Component : </h2>
                    <li>1. Managed by component's own internal state</li>
                    <li>2. Component updates own internal state on user interaction</li>
                    <li>3. Data flows within the component</li>
                    <li>4. More difficult to debug</li>
                    <li>5. Generally slower as there's more state management</li>
                    <li>6. More complex code</li>
                    <li>7. Considered an alternate approach</li>
                </ul>
            </div>
            <br />
            <div className='ml-20'>
                <h2 className='font-bold'>Question 2: How to validate React props using PropTypes</h2>
                <br />
                <p className='font-bold'>React Props Validation</p>
                <br />
                <p>Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.
                    Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
                </p>
                <br />
                <ul>
                    <h2 className='font-bold'>PropsType</h2>
                    <br />
                    <li>1. PropTypes.any</li>
                    <li>2. PropTypes.array</li>
                    <li>3. PropTypes.bool</li>
                    <li>4. PropTypes.func</li>
                    <li>5. PropTypes.number</li>
                    <li>6. PropTypes.object</li>
                    <li>7. PropTypes.string</li>
                    <li>8. PropTypes.symbol</li>
                    <li>9. PropTypes.instanceOf</li>
                    <li>10. PropTypes.isRequired</li>
                    <li>11. PropTypes.element</li>
                    <li>12. PropTypes.node</li>
                    <li>13. PropTypes.oneOf()</li>
                    <li>14. PropTypes.oneOfType([PropTypes.string,PropTypes.number])</li>
                </ul>
            </div>
            <br />
            <div className='ml-20'>
                <h2 className='font-bold'>Question 3: Tell us the difference between nodejs and express js.</h2>
               <br />
                <h2 className='font-bold'>Express.js</h2>
              <br />
                <ul>
                    <li>1. Express.js is classified under Microframeworks (Backend) category.</li>
                    <li>2. Express.js is built on Node.js.</li>
                    <li>3. Express.js embodies more features since it is an addition to Node.js functionalities. </li>
                    <li>4. Express.js uses approaches of Node.js for building web apps and APIs.</li>
                    <li>5. Express.js requires Node.js.</li>
                    <li>6. Express.js demands less time because it can be written in less number of lines and a few minutes.
                    </li>
                    <li>7. Express.js supports the view model.</li>
                    <li>8. Express.js is written in JavaScript.</li>
                    <li>9. In Express.js, controllers are provided.</li>
                    <li>10. In Express.js, routing is provided.</li>
                    <li>11. Express.js uses middleware for arranging functions systematically.
                    </li>
                </ul>
                <br />
                <ul>
                    <h2 className='font-bold'>Node.js</h2>
                    <br />
                    <li>1. Node.js primarily falls under the Frameworks (Full Stack) category.
                    </li>
                    <li>2. Node.js is built on Google’s V8 engine.</li>
                    <li>3. Express.js embodies more features since it is an addition to Node.js functionalities. </li>
                    <li>4. Node.js is used for building server-side, I/O, event driven apps.
                    </li>
                    <li>5. Node.js can be used independently from Express.js.</li>
                    <li>6. Node.js demands more time because of multifaceted tasks that ask for more lines of code and, therefore, more time.
                    </li>
                    <li>7. Node.js doesn’t support the view model.</li>
                    <li>8. Node.js is written in C, C++, JavaScript.</li>
                    <li>9. In Node.js, controllers are not provided</li>
                    <li>10. In Node.js, routing is not provided.</li>
                    <li>11. Node.js doesn’t use provision.</li>
                </ul>
            </div>
            <br />
            <div className='ml-20'>
                <h2 className='font-bold'>Question 4: What is a custom hook, and why will you create a custom hook?</h2>
                <p>Custom Hooks are functions. A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Some major differences between a custom React JS hook and React JS components A custom hook does not require a specific signature.

                    Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch

                    Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc
                </p>
                <br />
                <p className='font-bold'>There are several advantages to using Custom Hooks:</p>
                <br />
                <p>1. Reusability — we can use the same hook again and again, without the need to write it twice.</p>
                <p>2. Clean Code — extracting all the component logic into a hook will provide a cleaner codebase.</p>
                <p>3. Maintainability — easier to maintain. if we need to change the logic of the hook, we only need to change it once.
                </p>
            </div>

        </div>
    );
};

export default Blog;