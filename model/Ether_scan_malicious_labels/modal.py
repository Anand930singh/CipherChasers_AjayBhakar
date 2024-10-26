import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from wordcloud import WordCloud

# Load the dataset
data = pd.read_csv('C:/Users/HP/Desktop/Hack2Future/model/Ether_scan_malicious_labels/Etherscan_malicious_labels.csv')

# Set up the aesthetics for seaborn
sns.set(style="whitegrid")

### 1. Distribution of Wallet Tags (Bar Plot) ###

# Count the occurrences of each wallet tag
wallet_tag_counts = data['wallet_tag'].value_counts().head(10)  # Top 10 tags for clarity

# Plot the distribution of wallet tags
plt.figure(figsize=(12, 6))
sns.barplot(x=wallet_tag_counts.values, y=wallet_tag_counts.index, palette="viridis")
plt.title("Top 10 Most Common Wallet Tags")
plt.xlabel("Frequency")
plt.ylabel("Wallet Tag")
plt.show()

### 2. Data Source Distribution (Pie Chart) ###

# Count the occurrences of each data source
data_source_counts = data['data_source'].value_counts()

# Plot the distribution of data sources as a pie chart
plt.figure(figsize=(8, 8))
plt.pie(data_source_counts.values, labels=data_source_counts.index, autopct='%1.1f%%', startangle=140, colors=sns.color_palette("pastel"))
plt.title("Distribution of Data Sources for Malicious Labels")
plt.show()

### 3. Word Cloud for Wallet Tags ###

# Generate a word cloud for wallet tags
wallet_tags_text = ' '.join(data['wallet_tag'].dropna().astype(str))
wordcloud = WordCloud(width=800, height=400, background_color='white', colormap='viridis').generate(wallet_tags_text)

# Display the word cloud
plt.figure(figsize=(12, 6))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.title("Word Cloud of Wallet Tags")
plt.show()

### 4. Correlation Heatmap (if applicable) ###

# Example heatmap if there are numerical columns available for correlation
# Convert any non-numeric columns to numeric if meaningful

# Commented out here because original dataset might not have numerical data, but use if applicable
# numerical_data = data.select_dtypes(include=['float64', 'int64'])  # Only numerical columns
# if not numerical_data.empty:
#     plt.figure(figsize=(10, 8))
#     sns.heatmap(numerical_data.corr(), annot=True, cmap="coolwarm", fmt=".2f")
#     plt.title("Correlation Heatmap")
#     plt.show()

### 5. Top Address Labels (Horizontal Bar Plot) ###

# Get the top 10 most frequently occurring banned addresses
address_counts = data['banned_address'].value_counts().head(10)

# Plot the top addresses in a horizontal bar chart
plt.figure(figsize=(12, 6))
sns.barplot(y=address_counts.index, x=address_counts.values, palette="plasma")
plt.title("Top 10 Most Frequently Banned Addresses")
plt.xlabel("Frequency")
plt.ylabel("Banned Address")
plt.show()

### 6. Count Plot for Wallet Tags (Count Plot) ###

# Count plot for wallet tags (categorical distribution)
plt.figure(figsize=(14, 8))
sns.countplot(data=data, y="wallet_tag", order=data['wallet_tag'].value_counts().iloc[:10].index, palette="cubehelix")
plt.title("Frequency of Top Wallet Tags")
plt.xlabel("Frequency")
plt.ylabel("Wallet Tag")
plt.show()

### 7. Pair Plot (if dataset has relevant numerical columns) ###

# Example pair plot, if there are numerical features present for analysis
# Only applicable if dataset contains columns with continuous data

# Uncomment if applicable
# sns.pairplot(numerical_data, diag_kind="kde", plot_kws={"s": 10}, corner=True)
# plt.suptitle("Pair Plot of Numerical Features", y=1.02)
# plt.show()

### 8. Missing Values Heatmap ###

# Heatmap of missing values to understand the distribution of NaNs
plt.figure(figsize=(10, 6))
sns.heatmap(data.isnull(), cbar=False, cmap='YlOrRd', yticklabels=False)
plt.title("Missing Values Heatmap")
plt.show()
