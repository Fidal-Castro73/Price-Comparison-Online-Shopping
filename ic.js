document.getElementById('auth-icon').addEventListener('click', function() {
    const authIcon = document.getElementById('auth-icon');
    if (authIcon.getAttribute('data-logged-in') === 'true') {
        // Logout action
        authIcon.setAttribute('data-logged-in', 'false');
        authIcon.innerHTML = '<img src="login-icon.png" alt="Login">';
    } else {
        // Login action
        authIcon.setAttribute('data-logged-in', 'true');
        authIcon.innerHTML = '<img src="user-icon.png" alt="User">';
    }
});
function getComparison() {
    // Create comparison result HTML dynamically
    const comparisonResults = `
        <div class="comparison-container">
    <h2>Comparison Results</h2>
    <br>
    <div class="comparison-table-wrapper">
        <!-- Price Comparison -->
        <div class="table1">
            <h3>Price Comparison</h3>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Price</th>
                        <th>Progress Bar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amazon</td>
                        <td>3000 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 75%;"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Flipkart</td>
                        <td>2500 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 65%;"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Delivery Charge Comparison -->
        <div class="table2">
            <h3>Delivery Charge Comparison</h3>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Delivery Charge</th>
                        <th>Progress Bar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amazon</td>
                        <td>150 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 30%;"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Flipkart</td>
                        <td>200 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 40%;"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Delivery Time Comparison -->
        <div class="table3">
            <h3>Delivery Time Comparison</h3>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Delivery Time</th>
                        <th>Progress Bar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amazon</td>
                        <td>7 Days</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 50%;"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Flipkart</td>
                        <td>5 Days</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 70%;"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Total Price Comparison -->
        <div class="table4">
            <h3>Total Price Comparison</h3>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Total Price</th>
                        <th>Progress Bar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amazon</td>
                        <td>3150 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 75%;"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Flipkart</td>
                        <td>2700 Rs</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar" style="width: 65%;"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

    `;

    // Inject the results into the container at the bottom
    document.getElementById("comparison-results-container").innerHTML = comparisonResults;
}
