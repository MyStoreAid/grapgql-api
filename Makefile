build:
	npm run build

docker_build_dev:
	docker-compose build

docker_up_dev:
	docker-compose up -d

test:
	dotenv -e .env.test docker-compose -f docker-compose-test.yml up -d && npm run migrate-dev && npm test
