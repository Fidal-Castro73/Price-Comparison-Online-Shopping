function getComparison() {
    // Create comparison result HTML dynamically
    const comparisonResults = `
        <div class="comparison-container">
            <h2>Comparison Results</h2>
            <div id="comparison-results">
                <div class="comparison-table">
                    <!-- Price Comparison -->
                    <h3>Price Comparison</h3>
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
            
                    <!-- Delivery Charge Comparison -->
                    <h3>Delivery Charge Comparison</h3>
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
            
                    <!-- Delivery Time Comparison -->
                    <h3>Delivery Time Comparison</h3>
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
            
                    <!-- Total Price Comparison -->
                    <h3>Total Price Comparison</h3>
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
