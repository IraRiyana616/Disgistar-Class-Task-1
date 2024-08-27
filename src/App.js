import './App.css';

//======= Tugas Kelas Pertama Hacker FE-7 ======//
//
//======== Tugas Ketiga ========//
// 7. Panggil variable items di App.js
// 8. Membuat State, dimana state value awalnya adalah dari constant
// 9. Tambahkan button 'Tambah Item", ketika button di klik
// 10. Upload Tugas ke akun github dan mengirimkan link repository
//==============================//

import React, { useState } from 'react';
import './App.css';
import initialItems from './items/initialItems';
import Card from './components/Card';

function App() {
  // State untuk menyimpan items
  const [items, setItems] = useState(initialItems);

  // Fungsi untuk menambah item
  const addItem = () => {
    const newItem = {
      title: `New card's h2 ${items.length + 1}`,
      subTitle: `New card's h3 ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task: Add three Card elements</h1>
      </header>
      {/* Button untuk menambah item */}
      <button onClick={addItem}>Tambah Item</button>
      {/* Loop melalui array items dan buat elemen card untuk setiap item */}
      {items.map((item, index) => (
        <Card
          key={item.title + index}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </div>
  );
}

export default App;

//======== Tugas Kedua ========//
// 4. Item box menjadi child component dengan file yang terpisah dan disimpan di folder 'components'
// 5. Panggil component di App.js
// 6. Buat folder baru bernama constants dan pindahkan variable items
//==============================//

// import './App.css';

// function App() {
//   const items = [
//     {
//       title: "First card's h2",
//       subTitle: "First card's h3",
//     },
//     {
//       title: "Second card's h2",
//       subTitle: "Second card's h3",
//     },
//     {
//       title: "Third card's h2",
//       subTitle: "Third card's h3",
//     },
//   ];

//   return (
//     <div className="App">
//       <header>
//         <h1>Task: Add three Card elements</h1>
//       </header>
//       {items.map((item, index) => (
//         <div className="card" key={index}>
//           <h2>{item.title}</h2>
//           <h3>{item.subTitle}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//======== Tugas Pertama ========//
// 1. Style-nya tidak dipanggil berulang-ulang
// 2. Style-nya dijadikan variable
// 3. Value dari masing-masing box, diambil dari variable bukan di hardcode
//==============================//

// function App() {
//   return (
//     <div style={{ paddingLeft: 25 }}>
//       <h1>Task: Add three Card elements</h1>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           rowGap: 20,
//           paddingLeft: 20,
//         }}>
//         <div
//           style={{
//             border: '1px solid black',
//             borderRadius: 10,
//             width: 350,
//             paddingLeft: 20,
//           }}>
//           <h2>First card's h2</h2>
//           <h3>First card's h3</h3>
//         </div>
//         <div
//           style={{
//             border: '1px solid black',
//             borderRadius: 10,
//             width: 350,
//             paddingLeft: 20,
//           }}>
//           <h2>Second card's h2</h2>
//           <h3>Second card's h3</h3>
//         </div>
//         <div
//           style={{
//             border: '1px solid black',
//             borderRadius: 10,
//             width: 350,
//             paddingLeft: 20,
//           }}>
//           <h2>Third card's h2</h2>
//           <h3>Third card's h3</h3>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
