# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
file_path = 'C:/Users/HP/Desktop/Hack2Future/model/Ethereum_fraud/transaction_dataset.csv'
data = pd.read_csv(file_path)

# Initial Data Inspection
print(data.info())
print(data.describe())

# Check the column names to find any discrepancies
print("Columns in the dataset: ", data.columns)

# Plotting frequency of phishing flags using the correct column name 'FLAG'
plt.figure(figsize=(10, 6))
sns.countplot(x='FLAG', data=data)
plt.title('Frequency of Fraudulent (FLAG) vs. Non-Fraudulent Records')
plt.xlabel('Fraudulent (1) / Non-Fraudulent (0)')
plt.ylabel('Count')
plt.show()

# Selecting only numeric columns for the correlation matrix
numeric_cols = data.select_dtypes(include='number')

# Correlation Matrix for numeric columns
plt.figure(figsize=(12, 8))
sns.heatmap(numeric_cols.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()

# Checking if the 'total Ether sent' column exists before plotting a boxplot
if 'total Ether sent' in data.columns:
    plt.figure(figsize=(10, 6))
    sns.boxplot(x='FLAG', y='total Ether sent', data=data)
    plt.title('Outliers in Transaction Amounts by Fraud Flag (FLAG)')
    plt.xlabel('Fraudulent (1) / Non-Fraudulent (0)')
    plt.ylabel('Total Ether Sent')
    plt.show()

# Time-based analysis of phishing incidents (if 'Date' column exists)
if 'Date' in data.columns:
    data['Date'] = pd.to_datetime(data['Date'])
    plt.figure(figsize=(14, 7))
    fraud_by_date = data[data['FLAG'] == 1].groupby('Date').size()
    fraud_by_date.plot()
    plt.title('Time Series Analysis of Fraudulent Incidents')
    plt.xlabel('Date')
    plt.ylabel('Number of Fraudulent Incidents')
    plt.show()
