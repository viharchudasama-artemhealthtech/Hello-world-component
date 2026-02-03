# Angular Parent-Child Component Project

A demonstration Angular 17 application showcasing component communication, data binding, and structural directives using standalone components.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Architecture](#component-architecture)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)

## 🎯 Overview

This project is a learning-focused Angular application that demonstrates fundamental Angular concepts including:
- Parent-child component communication
- Property binding (interpolation, property binding, event binding)
- Two-way data binding with `ngModel`
- Angular control flow (`@if`, `@for`)
- Structural directives (`*ngIf`)
- Event handling and custom events

## ✨ Features

### Parent Component
- Sends data to child component via `@Input()`
- Receives messages from child component via `@Output()`
- Displays received messages dynamically

### Child Component
- **Interpolation**: Displays dynamic data (name, status, salary)
- **Property Binding**: Demonstrates disabled button state
- **Event Binding**: Button click events
- **Two-Way Binding**: Real-time input synchronization with `[(ngModel)]`
- **Structural Directives**: 
  - Filters and displays users under age 50 using `@if` and `@for`
  - Conditional rendering with `*ngIf`
  - User count display

## 🛠 Technology Stack

| Technology | Version |
|------------|---------|
| Angular | 17.3.0 |
| TypeScript | 5.4.2 |
| RxJS | 7.8.0 |
| Node.js | (compatible with Angular 17) |
| Karma | 6.4.0 |
| Jasmine | 5.1.0 |

## 📁 Project Structure

```
project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── child/
│   │   │       ├── child.component.ts       # Child component logic
│   │   │       ├── child.component.html     # Child component template
│   │   │       ├── child.component.css      # Child component styles
│   │   │       └── child.component.spec.ts  # Child component tests
│   │   ├── app.component.ts                 # Parent component logic
│   │   ├── app.component.html               # Parent component template
│   │   ├── app.component.css                # Parent component styles
│   │   ├── app.config.ts                    # Application configuration
│   │   └── app.routes.ts                    # Routing configuration
│   ├── index.html                           # Main HTML file
│   ├── main.ts                              # Application entry point
│   └── styles.css                           # Global styles
├── angular.json                             # Angular CLI configuration
├── package.json                             # Dependencies
├── tsconfig.json                            # TypeScript configuration
└── README.md                                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- Angular CLI (optional but recommended)

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## 🏗 Component Architecture

### Parent Component (`AppComponent`)

**File**: `src/app/app.component.ts`

```typescript
export class AppComponent {
  title = 'project';
  childName = 'Parent to child';
  message = "";

  receiveMessage(data: string) {
    this.message = data;
  }
}
```

**Responsibilities**:
- Passes `childName` to the child component via property binding
- Listens for custom events from child via `(myEvent)`
- Displays messages received from child

### Child Component (`ChildComponent`)

**File**: `src/app/components/child/child.component.ts`

```typescript
export class ChildComponent {
  name = "I am Child Component.";
  status = "Developer";
  salary = 100000;
  isbuttondisabled = false;
  inputvalue = "";

  users = [
    { id: 1, name: "Piyush", age: 31 },
    { id: 2, name: "Divyansh", age: 11 },
    { id: 3, name: "Jatin", age: 41 },
    { id: 4, name: "Siddharth", age: 51 },
    { id: 5, name: "Parth", age: 61 },
  ];

  alarm() {
    alert("Button clicked");
  }

  greet(e: Event) {
    this.inputvalue = (e.target as HTMLInputElement).value;
  }
}
```

**Responsibilities**:
- Demonstrates various data binding techniques
- Manages user list and filtering logic
- Handles user interactions (button clicks, input events)

## 💡 Key Concepts Demonstrated

### 1. Interpolation
```html
<h5>Name : {{name.toUpperCase()}}</h5>
<h5>Status : {{status}}</h5>
<h5>Salary : {{salary}}</h5>
```

### 2. Property Binding
```html
<button [disabled]="isbuttondisabled" (click)="alarm()">Submit</button>
```

### 3. Event Binding
```html
<button (click)="alarm()">Submit</button>
```

### 4. Two-Way Binding
```html
<input type="text" [(ngModel)]="inputvalue">
<p>You entered : {{inputvalue}}</p>
```

### 5. Angular Control Flow (New in Angular 17)
```html
@for(u of users; track u.id) {
  @if(u.age < 50) { 
    <p>{{u.name}}</p>
    <p>{{u.age}}</p>
  }
}
```

### 6. Structural Directives
```html
<div *ngIf="users.length > 0">
  <p>Total users : {{users.length}}</p>
</div>

<div *ngIf="users.length == 0">
  <p>No users found</p>
</div>
```

### 7. Parent-Child Communication
```html
<!-- Parent passes data down -->
<app-child [Uname]="childName" (myEvent)="receiveMessage($event)">
</app-child>

<!-- Parent receives data from child -->
<p>Message from child: {{ message }}</p>
```

## 🔧 Development

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding

Generate new components:
```bash
ng generate component component-name
```

Generate other artifacts:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Running Unit Tests

Execute the test suite via [Karma](https://karma-runner.github.io):
```bash
npm test
# or
ng test
```

### Running End-to-End Tests

```bash
ng e2e
```

Note: You may need to add an e2e testing package first.

## 📦 Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Control Flow](https://angular.io/guide/control-flow)
- [Angular Forms](https://angular.io/guide/forms-overview)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes.

## 👤 Author

**Piyush**

---

**Note**: This is a learning project demonstrating Angular 17's standalone components and modern control flow syntax.
