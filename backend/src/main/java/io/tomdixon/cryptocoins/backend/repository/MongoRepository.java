package io.tomdixon.cryptocoins.backend.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import io.tomdixon.cryptocoins.backend.model.WatchlistEntry;

public interface MongoRepository extends ReactiveCrudRepository<WatchlistEntry, String> {

}
