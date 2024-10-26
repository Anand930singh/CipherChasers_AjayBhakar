# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset from the CSV file
file_path = "C:/Users/HP/Desktop/Hack2Future/model/malicious_smart_contract/malicious_smart_contracts.csv"
data = pd.read_csv(file_path)

# Display basic information and check for missing values
print("Dataset Overview:")
print(data.info())
print("\nMissing Values Count:")
print(data.isnull().sum())

# Set a consistent style for plots
sns.set(style="whitegrid")

# 1. Distribution of Contract Tags
plt.figure(figsize=(12, 6))
sns.countplot(data=data, y='contract_tag', order=data['contract_tag'].value_counts().index, palette='coolwarm')
plt.title('Distribution of Contract Tags', fontsize=16)
plt.xlabel('Count', fontsize=12)
plt.ylabel('Contract Tag', fontsize=12)
plt.show()

# 2. Top 10 Contract Creators by Frequency
top_creators = data['contract_creator'].value_counts().head(10)
plt.figure(figsize=(10, 5))
top_creators.plot(kind='barh', color='coral')
plt.title('Top 10 Contract Creators', fontsize=16)
plt.xlabel('Number of Contracts', fontsize=12)
plt.ylabel('Contract Creator Address', fontsize=12)
plt.show()

# 3. Distribution of Etherscan Labels
plt.figure(figsize=(10, 5))
sns.countplot(data=data, y='contract_creator_etherscan_label', 
              order=data['contract_creator_etherscan_label'].value_counts().index, palette='viridis')
plt.title('Distribution of Etherscan Labels', fontsize=16)
plt.xlabel('Count', fontsize=12)
plt.ylabel('Etherscan Label', fontsize=12)
plt.show()

# 4. Contracts with Missing Tags vs. Labeled Contracts
data['has_contract_tag'] = data['contract_tag'].notnull().astype(int)  # 1 if tag exists, 0 otherwise
plt.figure(figsize=(8, 5))
sns.countplot(data=data, x='has_contract_tag', palette='pastel')
plt.title('Labeled vs. Unlabeled Contracts', fontsize=16)
plt.xticks([0, 1], ['Unlabeled', 'Labeled'], fontsize=12)
plt.xlabel('Contract Tag Availability', fontsize=12)
plt.ylabel('Count', fontsize=12)
plt.show()

# 5. Top Sources of the Data
plt.figure(figsize=(10, 5))
sns.countplot(data=data, y='source', order=data['source'].value_counts().index, palette='cubehelix')
plt.title('Top Sources of the Data', fontsize=16)
plt.xlabel('Count', fontsize=12)
plt.ylabel('Source', fontsize=12)
plt.show()

# 6. Correlation between Tags and Etherscan Labels
tag_label_df = data[['contract_tag', 'contract_creator_etherscan_label']].dropna()
plt.figure(figsize=(12, 6))
sns.heatmap(pd.crosstab(tag_label_df['contract_tag'], tag_label_df['contract_creator_etherscan_label']),
            annot=True, cmap='Blues', fmt='d')
plt.title('Correlation Between Contract Tags and Etherscan Labels', fontsize=16)
plt.xlabel('Etherscan Label', fontsize=12)
plt.ylabel('Contract Tag', fontsize=12)
plt.show()

# 7. Pie Chart: Proportion of Different Etherscan Labels
label_counts = data['contract_creator_etherscan_label'].value_counts()
plt.figure(figsize=(8, 8))
label_counts.plot(kind='pie', autopct='%1.1f%%', startangle=140, cmap='tab20')
plt.title('Proportion of Etherscan Labels', fontsize=16)
plt.ylabel('')  # Hide y-label for clarity
plt.show()

# 8. Contract Creator with Multiple Tags
tag_counts = data.groupby('contract_creator')['contract_tag'].nunique().sort_values(ascending=False).head(10)
plt.figure(figsize=(10, 5))
tag_counts.plot(kind='bar', color='teal')
plt.title('Contract Creators with Multiple Tags', fontsize=16)
plt.xlabel('Contract Creator Address', fontsize=12)
plt.ylabel('Number of Unique Tags', fontsize=12)
plt.show()
