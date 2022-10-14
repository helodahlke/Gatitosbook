# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Anotações: por helo
Para gerar um componente: ng g c {nomeDoComponente}
ng(angular)/g(generate)/c(component)/nomeDoComponente

 Configuração loadChildren (app-routing.module.ts): 
 Serve para definir que o acesso a rota é feito sob demanda, ou seja, somente quando o usuário tentar acessar essa rota a mesma será invocada

 [(ngModel)]="" -> 2 way data bind: representa que o Angular vai fazer um meio de campo da comunicação da View do html para o modelo do componente 

 @Injectable -> indica que a classe pode ser injetada em outra classe ou serviço
 Por default é passado o provideIn como root, sendo assim o angular injeta uma vez só (Singleton)

 .subscribe() -> É como se fosse um .then da promise, ou seja, aguarda o retorno do metodo

Interpolação: utilizar {{ }} com um atributo no meio para o tornar dinamico

Interface: serve para modelar os dados de acordo com o que nosso back-end está esperando

Para validações, existe uma classe Angular que já faz esse processo, que é a classe validators

Safe navigation - ao inves de precisar validar se existe aquele elemento ou propriedade, utilizando o safe navigation essa validação é feita automaticamente utilizando uma interrogação antes do ponto


 BehaviorSubject: toda vez que um outro componenete faz um subscribe nesse serviço ele envia o ultimo estado. É necessario mandar o estado inicial.

 Interceptor: manipula a requisição antes dela ir para o servidor. 
