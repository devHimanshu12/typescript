# typescript


<ol>
    <li><a href="#what_is_typescript"> What is TypeScript ?</a></li>
    <li><a href="#what_typescript_does"> What typescript does ?</a></li>
    <li><a href="#data_types"> Data types in Typescript ?</a></li>
    <li><a href="#noImplicitAny"> what is noImplicitAny in Typescript ?</a></li>
    <li><a href="#union_types"> What is Union Types in Typescript ?</a></li>
    <li><a href="#inference"> what is inference in Typescript ?</a></li>
    <li><a href="#type_alias"> what is type aliases in Typescript ?</a></li>
 </ol>
    
    <ol >
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
            <b>noImplicitAny</b>
            <p>when you wan't typescript to throw an error on defautl any type or by inference, we use noImplicitAny to flag any implicit any as an error.</p>
        </li>
        <li id="union_types">
            <b>Union Types</b>
            <p>type script allows us to build new types using exiting types by using operators. 
                <span>
                    example id: number | string
                </span>
            </p>
        </li>
        <li id="inference">
            <b>inference</b>
            <p>whenever we intialize a variable in typescript, in most cases typescript tries to automatically infer the type in your code.</p>
            <span>example: let name = "Himanshu" // typecript will infer type string for variable name</span>
        </li>
        <li id="type_alias">
            <b>Type Aliases</b>
            <p>when we want create a object type by using existing data types and reuse it. In that case we can use keyword type to create an type.</p>
            <span>example: type area = {
                    length:number;
                    breadth:number;
                }
            </span>

        </li>
    </ol>  