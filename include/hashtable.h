#ifndef HASHTABLE_H
#define HASHTABLE_H

#define TABLE_SIZE 100

typedef struct Entry {
    char *key;
    int value;
    struct Entry *next;
} Entry;

typedef struct {
    Entry *entries[TABLE_SIZE];
} HashTable;

HashTable* create_table();
unsigned int hash(const char *key);
void ht_insert(HashTable *table, const char *key, int value);
int ht_search(HashTable *table, const char *key);
void ht_delete(HashTable *table, const char *key);
void free_table(HashTable *table);

#endif
