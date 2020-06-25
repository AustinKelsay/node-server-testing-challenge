const server = require("./server");
const db = require("./data/dbConfig");
const request = require("supertest");
const Hobbits = require("./hobbits/hobbitsModel");

beforeEach(() => {
    return db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run());
})

describe('GET /', () => {
    it('returns 200 status code', () => {
        return request(server).get('/')
            .expect(200)
            .then((res) => {
                expect(res.body.api).toBe('up');
            })
    })
})

describe('POST /hobbits', () => {
    it('returns 200 status code', () => {
        return request(server).post('/hobbits').send({ name: 'gaffer', age: 69 })
        .expect(200)
    })

    it('returns the hobbit object', () => {
        return request(server).post('/hobbits').send({ name: 'gaffer', age: 69 })
            .then((res) => {
                expect(res.body.Hobbits)
            })
    })
})

describe('DELETE /hobbits/:id', () => {
    it('returns 200 status code', () => {
        return request(server).delete('/hobbits/4').send("4")
            .expect(200)
            .then((res) => {
                expect(res.body)
            })
    })
})

describe('hobbits model', () => {
    describe('add()', () => {
      // this example uses async/await to make it easier to read and understand
      it('should insert the provided hobbits into the db', async () => {
        // this code expects that the table is empty, we'll handle that below
        // add data to the test database using the data access file
        await Hobbits.add({ name: 'gaffer', age: 69 });
        await Hobbits.add({ name: 'Gus', age: 69 });
  
        // read data from the table
        const hobbits = await db('hobbits');
  
        // verify that there are now two records inserted
        expect(hobbits).toHaveLength(5);
      });
    });
  });