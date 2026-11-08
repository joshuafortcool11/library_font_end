import React from 'react';
import books from './BookList';
import CoursesForThisSemester from './CoursesForThisSemester';

function HomePage() {
    const gender = 'F';

    const totalPrice = books.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>This is the home page</h2>
            <p>These are the available books</p>
            <div>
                {gender === 'F' ? <div>hello Girl</div> : <div>hello Boy</div>}
            </div>

            <CoursesForThisSemester />

            <div>
                <p>This is the available books :</p>
                <table border="1" style={{ margin: '15px auto', borderCollapse: 'collapse', width: '70%', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.code}>
                                <td>{book.code}</td>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <button>Total Price: {totalPrice}</button>
            </div>
        </div>
    );
}

export default HomePage;
