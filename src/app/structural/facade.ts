// class Part1 {
//     method1(): void {
//         console.log("`method1` of Part1");
//     }
// }

// class Part2 {
//     method2(): void {
//         console.log("`method2` of Part2");
//     }
// }

// class Part3 {
//     method3(): void {
//         console.log("`method3` of Part3");
//     }
// }

// class Facade {
//     private part1: Part1 = new Part1();
//     private part2: Part2 = new Part2();
//     private part3: Part3 = new Part3();

//     operation1(): void {
//         console.log("`operation1` is called ===");
//         this.part1.method1();
//         this.part2.method2();
//         console.log("==========================");
//     }

//     operation2(): void {
//         console.log("`operation2` is called ===");
//         this.part1.method1();
//         this.part3.method3();
//         console.log("==========================");
//     }
// }
