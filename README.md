# typescript


<ol>
    <li><a href="#what_is_typescript"> What is TypeScript ?</a></li>
    <li><a href="#what_typescript_does"> What typescript does ?</a></li>
    <li><a href="#data_types"> Data types in Typescript ?</a></li>
    <li><a href="#noImplicitAny"> What is noImplicitAny in Typescript ?</a></li>
    <li><a href="#union_types"> What is Union Types in Typescript ?</a></li>
    <li><a href="#inference"> What is inference in Typescript ?</a></li>
    <li><a href="#type_alias"> What is type aliases in Typescript ?</a></li>
    <li><a href="#interface"> What is interface in Typescript ?</a></li>
    <li><a href="#type_alias_and_interface"> Difference between type aliases and Interface in Typescript ?</a></li>
</ol>
    
<ol>
        <li id="what_is_typescript">
            <h3> What is TypeScript ?</h3>
            <p>Typescript is a superset of javascript language and in other words it is a strongly typed, object oriented, compiled  programming language that is built on javascript.
            It allows developers to catch errors during development and enhance code maintainability. 
            Superset basically means everything can be done using typescript which we can do with javascript with much more precise manner so that code throws less error at runtime.
            </p>
        </li>
        <li id="what_typescript_does">
            <h3>What typescript does ?</h3>
            <p>static checking -  means whenever we are writing the code it keeps on checking and analyzing the code and throws errors and warnings at development time.
            </p>
        </li>
        <li id="data_types">
            <h3>Data types in Typescript ?</h3>
            <p>	There are two types of data types in typescript
                <ol>
                    <li> <b> Built-in data type </b>
                        <ol>
                            <li>
                                String: It represents a text value like “frontendDevelopment”, or "Angular and React Developer".
                            </li>
                            <li>
                                String: It represents a text value like “frontendDevelopment”, or "Angular and React Developer".
                            </li>
                            <li>
                                Number: It represents the numbered values i.e. 2, 28, 99, etc.
                            </li>
                            <li>
                                Boolean: It stores true or false values.
                            </li>
                            <li>
                                Null: An empty value deliberately assigned to a variable.
                            </li>
                            <li>
                                Undefined: Represents a variable that is declared but not initialized.
                            </li>
                            <li>
                                any: Represents any value of any data type, this we used to avoid type checking errors.
                            </li>
                            <li>
                                void: Used to represent that a particular function is not going to return any value of any data type.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <b>User defined data type</b>
                        <ol>
                            <li>
                                arrays: In typescript, arrays are used to store the multiple values of any kind of data type.
                                To specify the type of an array like [1, 2, 3], you can use the syntax number[] or Array<number>;
                            </li>
                            <li>
                                Object types: to define an object type, we can simply list down its properties with its types in object like let obj:{ x: number; y: number }.
                            </li>
                            <li>
                                type Aliases: A type alias is exactly that - a name for any type.
                                example type user = {
                                    name:string;
                                    id:number;
                                }
                            </li>
                        </ol>
                    </li>
                </ol>
            </p>
        </li>
        <li id="noImplicitAny">
            <b>What is noImplicitAny in Typescript ?</b>
            <p>when you wan't typescript to throw an error on defautl any type or by inference, we use noImplicitAny to flag any implicit any as an error.</p>
        </li>
        <li id="union_types">
            <b>What is Union Types in Typescript ?</b>
            <p>type script allows us to build new types using exiting types by using operators. 
                <span>
                    example id: number | string
                </span>
            </p>
        </li>
        <li id="inference">
            <b>what is inference in Typescript ?</b>
            <p>whenever we intialize a variable in typescript, in most cases typescript tries to automatically infer the type in your code.</p>
            <span>example: let name = "Himanshu" // typecript will infer type string for variable name</span>
        </li>
        <li id="type_alias">
            <b>What is type aliases in Typescript ?</b>
            <p>when we want create a object type by using existing data types and reuse it. In that case we can use keyword type to create an type.</p>
            <span>example: type area = {
                    length:number;
                    breadth:number;
                }
            </span>
        </li>
        <li id="interface">
            <b>What is interface in Typescript ?</b>
            <p>interface declaration is an another way to name an object type</p>
            <span>example: interface Point {
                                             x: number;
                                             y: number;
                                            }
                                            function printCoord(pt: Point) {
                                                console.log("The coordinate's x value is " + pt.x);
                                                console.log("The coordinate's y value is " + pt.y);
                                              }                                              
            </span>
        </li>
        <li id="type_alias_and_interface">
            <b>Difference between type aliases and Interface in Typescript ?</b>
            <p>Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
                Almost   all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.</p>
            <span>
                <b>Adding new fields to an existing interface</b>
                   interface Window {
                        title: string;
                   }
                    interface Window {
                        ts: TypeScriptAPI;
                    }
                    const src = 'const a = "Hello World"';
                    window.ts.transpileModule(src, {}); 
            </span>
            <span>
                <b>A type cannot be changed after being created</b>
                    type Window = {
                        title: string;
                    }
                    type Window = {
                        ts: TypeScriptAPI;
                    }
                  // Error: Duplicate identifier 'Window'.
            </span>
            <b>points to remember:</b>
            <ol>
                <li>
                    type aliases can be merged or updated again but interface can
                        // An interface can be re-opened
                        // and new values added:
                        interface Mammal {
                            genus: string
                        }
                        interface Mammal {
                            breed?: string
                        }
                        const animal: Mammal = {
                            genus: "1234",
                            // Fails because breed has to be a string
                            breed: 1
                        }
                        type Reptile = {
                            genus: string
                        }
                          // You cannot add new variables in the same way
                         type Reptile = {
                             breed?: string
                        }
                </li>
                <li>
                    we cannot redeclare primitive type using interface but can be done using type
                        // Here's two examples of 
                        // using types and interfaces
                        // to describe an object 
                        interface AnObject1 {
                            value: string
                        }
                        type AnObject2 = {
                            value: string
                        }
                        // Using type we can create custom names
                        // for existing primitives:
                        type SanitizedString = string
                        type EvenNumber = number
                        // This isn't feasible with interfaces
                            interface X extends string {
                        }
                </li>
                <li>
                    compiler performance is better with extend in interface when compared to type aliases with intersection.
                    <b>Reason:</b> 
                    <p>Interfaces create a single flat object type that detects property conflicts, which are usually important to resolve! Intersections on the other hand just recursively merge properties, and in some cases produce never. Interfaces also display consistently better, whereas type aliases to intersections can't be displayed in part of other intersections. Type relationships between interfaces are also cached, as opposed to intersection types as a whole. A final noteworthy difference is that when checking against a target intersection type, every constituent is checked before checking against the "effective"/"flattened" type.
                        For this reason, extending types with interfaces/extends is suggested over creating intersection types.</p>
                        - type Foo = Bar & Baz & {
                            -     someProp: string;
                            - }
                            + interface Foo extends Bar, Baz {
                            +     someProp: string;
                            + }
                </li>
            </ol>
        </li>
</ol>  