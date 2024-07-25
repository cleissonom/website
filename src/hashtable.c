#include "hashtable.h"
#include <stdlib.h>
#include <string.h>

HashTable *create_table() {
  HashTable *table = (HashTable *)malloc(sizeof(HashTable));
  for (int i = 0; i < TABLE_SIZE; i++) {
    table->entries[i] = NULL;
  }
  return table;
}

unsigned int hash(const char *key) {
  unsigned long int value = 0;
  unsigned int key_len = strlen(key);
  for (unsigned int i = 0; i < key_len; i++) {
    value = value * 37 + key[i];
  }
  value = value % TABLE_SIZE;
  return value;
}

void ht_insert(HashTable *table, const char *key, int value) {
  unsigned int slot = hash(key);
  Entry *entry = table->entries[slot];
  if (entry == NULL) {
    table->entries[slot] = (Entry *)malloc(sizeof(Entry));
    table->entries[slot]->key = strdup(key);
    table->entries[slot]->value = value;
    table->entries[slot]->next = NULL;
  } else {
    Entry *prev;
    while (entry != NULL) {
      if (strcmp(entry->key, key) == 0) {
        entry->value = value;
        return;
      }
      prev = entry;
      entry = entry->next;
    }
    prev->next = (Entry *)malloc(sizeof(Entry));
    prev->next->key = strdup(key);
    prev->next->value = value;
    prev->next->next = NULL;
  }
}

int ht_search(HashTable *table, const char *key) {
  unsigned int slot = hash(key);
  Entry *entry = table->entries[slot];
  while (entry != NULL) {
    if (strcmp(entry->key, key) == 0) {
      return entry->value;
    }
    entry = entry->next;
  }
  return -1; // Not found
}

void ht_delete(HashTable *table, const char *key) {
  unsigned int slot = hash(key);
  Entry *entry = table->entries[slot];
  Entry *prev = NULL;
  while (entry != NULL && strcmp(entry->key, key) != 0) {
    prev = entry;
    entry = entry->next;
  }
  if (entry == NULL)
    return; // Key not found
  if (prev == NULL) {
    table->entries[slot] = entry->next;
  } else {
    prev->next = entry->next;
  }
  free(entry->key);
  free(entry);
}

void free_table(HashTable *table) {
  for (int i = 0; i < TABLE_SIZE; i++) {
    Entry *entry = table->entries[i];
    while (entry != NULL) {
      Entry *temp = entry;
      entry = entry->next;
      free(temp->key);
      free(temp);
    }
  }
  free(table);
}
